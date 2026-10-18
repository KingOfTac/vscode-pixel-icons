import { webfont } from 'webfont';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const __dirname = import.meta.dirname;

const svgs = [
  "files.svg",
  "search.svg",
  "debug-play.svg",
  "git-branch.svg",
  "puzzle.svg",
  "flask.svg",
].map(name => join(__dirname, '..', 'icons', name).replaceAll('\\', '/'));

async function generateFont() {
  try {
    const result = await webfont({
      files: svgs,
      formats: ['woff'],
      startUnicode: 0xE000,
      verbose: true,
      normalize: true,
      sort: false
    });
    const dest = join(__dirname, '..', 'themes', 'pixel-icons.woff')
    writeFileSync(dest, result.woff, 'binary');
    console.log(`Font created at ${dest}`);
  } catch (e) {
    console.error('Font creation failed', e);
    process.exitCode = 1;
  }
}

generateFont();