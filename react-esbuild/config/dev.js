const path = require('path');
const ROOT_DIR = process.cwd();
const { build }  = require('esbuild');

build({
  entryPoints: [
    path.resolve(ROOT_DIR, 'src/main.tsx'),
  ],
  outdir: 'public',
  watch: true,
  bundle: true,
  logLevel: 'info',
  sourcemap: true,
  minify: false,
  target: ['chrome90', 'firefox90'],
})
.catch(() => process.exit(1));