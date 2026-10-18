import { webfont } from 'webfont';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const __dirname = import.meta.dirname;

const svgs = [
  "files",
  "search",
  "debug-play",
  "git-branch",
  "puzzle",
  "flask",
  "chevron-down-2",
  "user",
  "settings-cog",
  "robot-face-sleeping",
  "bell",
  "octagon-x",
  "warning-diamond",
  "refresh",
  "file-plus",
  "folder-plus",
  "rotate-cw",
  "copy-minus",
  "close",
  "save",
  "copy-x"
].map(name => join(__dirname, '..', 'icons', `${name}.svg`).replaceAll('\\', '/'));

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