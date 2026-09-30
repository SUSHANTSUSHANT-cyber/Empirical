import { execFileSync } from 'node:child_process';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const output = resolve('artifacts/screenshots');
mkdirSync(output, { recursive: true });
const targets = [
  ['desktop-1920-home', 1920, 1080, '#home'],
  ['desktop-1440-home', 1440, 1000, '#home'],
  ['desktop-1440-journey', 1440, 1000, '#approach'],
  ['desktop-1440-device-system', 1440, 1000, '#services'],
  ['tablet-1024-home', 1024, 900, '#home'],
  ['tablet-768-journey', 768, 900, '#approach'],
  ['mobile-390-home', 390, 844, '#home'],
  ['mobile-390-journey', 390, 844, '#approach'],
  ['mobile-390-contact', 390, 844, '#contact'],
  ['mobile-375-home', 375, 812, '#home'],
  ['mobile-320-home', 320, 740, '#home'],
];
for (const [name, width, height, hash] of targets) {
  const file = resolve(output, `${name}.png`);
  execFileSync(chrome, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run', '--no-default-browser-check',
    `--user-data-dir=${resolve('artifacts/chrome-profile')}`, `--window-size=${width},${height}`,
    `--screenshot=${file}`, `http://localhost:3001/${hash}`,
  ], { stdio: 'ignore', timeout: 30000 });
}
console.log(`Captured ${targets.length} screenshots.`);
