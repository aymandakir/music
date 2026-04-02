const { Jimp } = require('jimp');
const path = require('path');

async function createHeartIcon() {
  const size = 1024;
  const image = new Jimp({ width: size, height: size, color: 0x00000000 });
  
  const pink1 = 0xf7c5daff;
  const pink2 = 0xe8699aff;
  const white = 0xffffff66;
  
  const cx = size / 2;
  const cy = size / 2 + 40;
  const heartSize = 360;
  
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const dx = Math.abs(x - cx);
      const dy = y - cy;
      
      const inLeftBubble = Math.pow(dx - heartSize * 0.4, 2) + Math.pow(dy - heartSize * 0.3, 2) < Math.pow(heartSize * 0.6, 2);
      const inRightBubble = Math.pow(dx + heartSize * 0.4, 2) + Math.pow(dy - heartSize * 0.3, 2) < Math.pow(heartSize * 0.6, 2);
      
      const triHeight = heartSize * 1.1;
      const triWidth = heartSize * 0.7;
      const triY = y - (cy - heartSize * 0.3);
      const inTriangle = triY > 0 && triY < triHeight && Math.abs(x - cx) < triWidth * (1 - triY / (triHeight * 1.3));
      
      if (inLeftBubble || inRightBubble || inTriangle) {
        const gradientFactor = (y - 200) / (size - 200);
        const color = gradientFactor < 0.5 ? pink1 : pink2;
        image.setPixelColor(color, x, y);
        
        if (dx < heartSize * 0.5 && dy < heartSize * 0.3 && (dx - 100) * 2 + dy * 1.5 < 80) {
          image.setPixelColor(white, x, y);
        }
      }
    }
  }
  
  await image.write(path.join(__dirname, 'assets', 'icon.png'));
  
  const sizes = [16, 32, 64, 128, 256, 512];
  for (const s of sizes) {
    const resized = image.clone().resize({ w: s, h: s });
    await resized.write(path.join(__dirname, 'assets', 'icon.iconset', `icon_${s}x${s}.png`));
    await resized.write(path.join(__dirname, 'assets', 'icon.iconset', `icon_${s}x${s}@2x.png`));
  }
  
  console.log('Icons created!');
}

createHeartIcon().catch(console.error);
