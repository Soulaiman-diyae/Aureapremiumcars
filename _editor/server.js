// Local car editor for aureapremiumcars.com. Runs only on this computer (127.0.0.1).
const http = require('http'), fs = require('fs'), path = require('path'), { execFile } = require('child_process');
const lib = require('./lib'), ROOT = lib.ROOT, PORT = Number(process.env.PORT || 4177);
const MIME = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.otf': 'font/otf' };
const send = (res, code, body, type = 'application/json; charset=utf-8') => { res.writeHead(code, { 'Content-Type': type, 'Cache-Control': 'no-store' }); res.end(typeof body === 'string' || Buffer.isBuffer(body) ? body : JSON.stringify(body)) };
const body = req => new Promise((ok, no) => { const b = []; let n = 0; req.on('data', c => { n += c.length; n > 40e6 ? (no(new Error('Too large')), req.destroy()) : b.push(c) }); req.on('end', () => { try { ok(JSON.parse(Buffer.concat(b).toString() || '{}')) } catch (e) { no(e) } }); req.on('error', no) });
const git = (...a) => new Promise((ok, no) => execFile('git', ['-c', 'core.longpaths=true', ...a], { cwd: ROOT, maxBuffer: 16e6 }, (e, out, err) => e ? no(new Error((err || out || e.message).trim())) : ok(out.trim())));
const inside = (base, rel) => { const p = path.resolve(base, rel); if (p !== base && !p.startsWith(base + path.sep)) throw new Error('Invalid path'); return p };
const slugify = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

async function status() {
  try { const changed = (await git('status', '--porcelain')).split('\n').filter(Boolean).length; let ahead = 0; try { ahead = Number(await git('rev-list', '--count', '@{u}..HEAD')) } catch { } return { changed, ahead } }
  catch (e) { return { changed: 0, ahead: 0, error: e.message } }
}
function clean(data) {
  if (!data || !Array.isArray(data.cars)) throw new Error('No cars in the data');
  const seen = new Set();
  for (const c of data.cars) {
    if (!c.make || !c.model) throw new Error('Every car needs a make and a model');
    if (!c.id) c.id = 'c' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
    if (!c.slug) { const base = slugify([c.make, c.model, c.color && c.color.fr, 'tanger'].filter(Boolean).join(' ')); let s = base, i = 2; while (seen.has(s) || data.cars.some(o => o !== c && o.slug === s)) s = base + '-' + i++; c.slug = s }
    if (seen.has(c.slug)) throw new Error('Two cars share the page name ' + c.slug);
    seen.add(c.slug); c.photos = c.photos || [];
  }
  return data;
}
http.createServer(async (req, res) => {
  try {
    const u = new URL(req.url, 'http://x'), p = decodeURIComponent(u.pathname);
    if (req.method === 'POST') {
      if (req.headers['x-editor'] !== '1') return send(res, 403, { error: 'Forbidden' });   // only the editor page itself may write
      const d = await body(req);
      if (p === '/api/save') { lib.saveData(clean(d)); const r = lib.build(); return send(res, 200, { ok: true, ...r, data: lib.loadData(), git: await status() }) }
      if (p === '/api/photo') {
        if (!Array.isArray(d.variants) || d.variants.length !== 3) throw new Error('Missing image data');
        const name = (slugify(d.name || 'photo') || 'photo') + '-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 4);
        ['', '-800', '-160'].forEach((s, i) => fs.writeFileSync(inside(path.join(ROOT, 'assets', 'cars'), name + s + '.webp'), Buffer.from(d.variants[i], 'base64')));
        return send(res, 200, { ok: true, file: `assets/cars/${name}.webp` });
      }
      if (p === '/api/publish') {
        await git('add', '-A');
        if ((await git('status', '--porcelain')).trim()) await git('-c', 'user.name=Soulaiman-diyae', '-c', 'user.email=Soulaiman-diyae@users.noreply.github.com', 'commit', '-q', '-m', d.message || 'Update cars from the editor');
        try { await git('pull', '--rebase', '-q') } catch (e) { throw new Error('Could not get the latest version from GitHub first: ' + e.message) }
        await git('push', '-q');
        return send(res, 200, { ok: true, commit: await git('log', '--oneline', '-1'), git: await status() });
      }
      return send(res, 404, { error: 'Not found' });
    }
    if (p === '/api/data') return send(res, 200, { data: lib.loadData(), git: await status() });
    let file;
    if (p === '/' || p === '/editor') file = path.join(__dirname, 'ui', 'index.html');
    else if (p.startsWith('/ui/')) file = inside(path.join(__dirname, 'ui'), p.slice(4));
    else if (p.startsWith('/site/')) { file = inside(ROOT, p.slice(6) || 'index.html'); if (file.startsWith(path.join(ROOT, '_editor')) || file.startsWith(path.join(ROOT, '.git'))) return send(res, 404, 'Not found', 'text/plain') }
    else return send(res, 404, 'Not found', 'text/plain');
    if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
    if (!fs.existsSync(file)) return send(res, 404, 'Not found', 'text/plain');
    send(res, 200, fs.readFileSync(file), MIME[path.extname(file).toLowerCase()] || 'application/octet-stream');
  } catch (e) { send(res, 400, { error: e.message || 'Unexpected error' }) }
}).listen(PORT, '127.0.0.1', () => console.log(`Aurea car editor: http://127.0.0.1:${PORT}  (keep this window open, close it to stop)`));
