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
  "copy-x",
  "more-horizontal-solid",
  "layout-left",
  "layout-left-on",
  "layout-right",
  "layout-right-on",
  "layout-bottom",
  "layout-bottom-on",
  "split",
  "grid-2x2-2-plus",
  "agent",
  "message-dots",
  "bell-dot-solid",
  "brackets",
  "terminal-2",
  "cube",
  "copy-plus",
  "fullscreen",
  "filter",
  "filter-solid",
  "chevron-down",
  "plus",
  "trash",
  "bulletlist-2",
  "queue-list",
  "file-play",
  "folder-open",
  "case-sensitive",
  "regex",
  "case-upper",
  "find-and-replace",
  "sparkles",
  "check",
  "target",
  "cloud",
  "diff",
  "checklist",
  "chatbot",
  "file",
  "settings-2",
  "mic",
  "laptop",
  "vpn"
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