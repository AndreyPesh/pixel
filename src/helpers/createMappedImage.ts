import calculateRelativeBrightness from './calculateRelativeBrightness';

const createMappedImage = (canvas: HTMLCanvasElement, pixels: ImageData) => {
  let min = 0;
  let max = 0;
  const mappedImage: Array<number[][]> = [];
  for (let y = 0; y < canvas.height; y++) {
    const row: Array<Array<number>> = [];
    for (let x = 0; x < canvas.width; x++) {
      const red = pixels.data[y * 4 * pixels.width + x * 4];
      const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
      const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
      const brightness = calculateRelativeBrightness(red, green, blue);
      if(brightness <= min) {
        min = brightness
      }
      if(brightness >= max) {
        max = brightness
      }
      const cell = [brightness];
      row.push(cell);
    }
    mappedImage.push(row);
  }
  console.log(`Max ${max} Min: ${min}`);
  
  return mappedImage;
};

export default createMappedImage;
