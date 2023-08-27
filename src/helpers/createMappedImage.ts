import calculateRelativeBrightness from './calculateRelativeBrightness';

const createMappedImage = (canvas: HTMLCanvasElement, pixels: ImageData) => {
  const mappedImage: Array<number[][]> = [];
  for (let y = 0; y < canvas.height; y++) {
    const row: Array<Array<number>> = [];
    for (let x = 0; x < canvas.width; x++) {
      const red = pixels.data[y * 4 * pixels.width + x * 4];
      const green = pixels.data[y * 4 * pixels.width + (x * 4 + 1)];
      const blue = pixels.data[y * 4 * pixels.width + (x * 4 + 2)];
      const brightness = calculateRelativeBrightness(red, green, blue);

      const cell = [brightness];
      row.push(cell);
    }
    mappedImage.push(row);
  }
  return mappedImage;
};

export default createMappedImage;
