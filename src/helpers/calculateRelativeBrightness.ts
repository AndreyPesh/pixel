const calculateRelativeBrightness = (
  red: number,
  green: number,
  blue: number
): number => {
  return (
    Math.sqrt(red * red * 0.299 + green * green * 0.587 + blue * blue * 0.114) /
    200
  );
};

export default calculateRelativeBrightness;
