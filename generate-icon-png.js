const { PNG } = require('pngjs');
const fs = require('fs');

const size = 512;
const png = new PNG({ width: size, height: size });

function heart(x, y) {
  const center = size / 2;
  const scale = size / 2.4;
  const fx = (x - center) / scale;
  const fy = (y - center + 20) / scale;
  return Math.pow(Math.abs(fx), 2 / 3) + Math.pow(Math.abs(fy), 2 / 3) <= 1;
}

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    const idx = (size * y + x) << 2;
    if (heart(x, y)) {
      png.data[idx] = 255;
      png.data[idx + 1] = 85;
      png.data[idx + 2] = 180;
      png.data[idx + 3] = 255;
    } else {
      png.data[idx] = 0;
      png.data[idx + 1] = 0;
      png.data[idx + 2] = 0;
      png.data[idx + 3] = 0;
    }
  }
}

const buffer = PNG.sync.write(png);
fs.writeFileSync('assets/icon.icns.png', buffer);
fs.writeFileSync('assets/icon.png', buffer);
console.log('Generated assets/icon.icns.png and assets/icon.png');
