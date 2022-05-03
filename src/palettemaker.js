const rgbRandom = () => {
  let color = [];

  for (let i = 0; i < 3; i++) {
    color[i] = Math.round(Math.random() * 255);
  }

  return color;
};
const createMonochromePalette = (color, index, step) => {
  let start = color[1] - index * step;
  let palette = [];
  let value;

  for (let i = 0; i < 5; i++) {
    value = start + step * i;
    palette[i] = [color[0], value, color[2]];
  }

  return palette;
};

export { createMonochromePalette, rgbRandom };
