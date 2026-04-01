const { PNG } = require('pngjs');
const toIco = require('png-to-ico');
const fs = require('fs');

function heart(x, y, size) {
  const center = size / 2;
  const scale = size / 2.4;
  const fx = (x - center) / scale;
  const fy = (y - center + 10) / scale;
  return Math.pow(Math.abs(fx), 2/3) + Math.pow(Math.abs(fy), 2/3) <= 1;
}

(async () => {
  const size = 256;
  const png = new PNG({ width: size, height: size });

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const idx = (size * y + x) << 2;
      if (heart(x, y, size)) {
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
  fs.writeFileSync('assets/icon.png', buffer);
  try {
    const proto = (typeof toIco === 'function' ? toIco : toIco.default || toIco.imagesToIco);
    if (!proto) throw new Error('png-to-ico function not found');
    const icoBuffer = await proto(buffer);
    fs.writeFileSync('assets/icon.ico', icoBuffer);
    console.log('assets/icon.ico generated');
  } catch (err) {
    console.error('Error creating icon.ico:', err);
    process.exit(1);
  }
})();
