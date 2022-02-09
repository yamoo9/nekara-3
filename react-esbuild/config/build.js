const path = require('path');
const ROOT_DIR = process.cwd();
const { buildSync }  = require('esbuild');

buildSync({
  entryPoints: [
    path.resolve(ROOT_DIR, 'src/main.tsx'),
  ],
  outdir: 'build',
  bundle: true,
  minify: true,
  treeShaking: true,
  format: 'esm',
  sourcemap: false,
  target: ['chrome90', 'firefox90', 'safari15', 'edge90'],
});