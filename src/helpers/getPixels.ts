const getPixels = (
  canvas: HTMLCanvasElement,
  ctx: CanvasRenderingContext2D
) => {
  const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
  return pixels;
};
export default getPixels;
