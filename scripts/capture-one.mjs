import { execFileSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
const [name, width, height, hash = '#home'] = process.argv.slice(2);
const output = resolve('artifacts/screenshots');
mkdirSync(output, { recursive: true });
execFileSync('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run', '--no-default-browser-check', '--run-all-compositor-stages-before-draw', '--virtual-time-budget=1500',
  `--user-data-dir=${resolve(`artifacts/chrome-${name}`)}`, `--window-size=${width},${height}`,
  `--screenshot=${resolve(output, `${name}.png`)}`, `http://localhost:3002/${hash}`,
], { stdio: 'ignore', timeout: 30000 });
