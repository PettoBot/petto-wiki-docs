const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const mascotPath = path.resolve(__dirname, '../favicon.png');
const mascotB64 = fs.readFileSync(mascotPath).toString('base64');

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="35%" r="75%">
      <stop offset="0%" stop-color="#fde52f" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#fde52f" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#1e1d1b"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <circle cx="1080" cy="90" r="3" fill="#fde52f" opacity="0.6"/>
  <circle cx="140" cy="540" r="3" fill="#fde52f" opacity="0.5"/>
  <circle cx="1000" cy="520" r="2" fill="#fde52f" opacity="0.4"/>
  <rect x="90" y="90" width="120" height="120" rx="28" fill="#262523" stroke="#fde52f" stroke-opacity="0.35" stroke-width="1.5"/>
  <image x="102" y="102" width="96" height="96" href="data:image/png;base64,${mascotB64}" />
  <text x="90" y="330" font-family="Arial, sans-serif" font-size="88" font-weight="700" fill="#f5f3ee">Petto</text>
  <text x="90" y="400" font-family="Arial, sans-serif" font-size="40" font-weight="400" fill="#b8b3a8">Documentation</text>
  <text x="90" y="470" font-family="Arial, sans-serif" font-size="24" font-weight="400" fill="#8a8478" xml:space="preserve">Every command, module, and variable, with real examples.</text>
  <text x="90" y="527" font-family="Arial, sans-serif" font-size="22" font-weight="600" fill="#fde52f">wiki.petto.sbs</text>
</svg>
`;

sharp(Buffer.from(svg))
  .png()
  .toFile(path.resolve(__dirname, '../og-image.png'))
  .then(() => console.log('og-image.png written'))
  .catch((err) => { console.error(err); process.exit(1); });
