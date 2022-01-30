const path = require('path');
const { buildSync } = require('esbuild');

buildSync({
  entryPoints: [path.resolve(process.cwd(), 'src/main.tsx')],
  bundle: true,
  minify: true,
  sourcemap: false,
  treeShaking: true,
  logLevel: 'info',
  format: 'esm',
  target: ['chrome90', 'safari19', 'firefox90', 'edge90'],
  outdir: 'public/dist',
});
