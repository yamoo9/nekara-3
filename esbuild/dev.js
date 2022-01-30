const path = require('path');
const { build } = require('esbuild');

build({
  entryPoints: [path.resolve(process.cwd(), 'src/main.tsx')],
  bundle: true,
  minify: false,
  sourcemap: true,
  treeShaking: false,
  logLevel: 'info',
  format: 'esm',
  target: ['chrome90', 'firefox90', 'safari15', 'edge90'],
  outdir: 'public/dist',
  watch: true,
});
