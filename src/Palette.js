import { useState } from "react";
import { createMonochromePalette, rgbRandom } from "./palettemaker";
import RGBColorpicker from "./components/RGBColorpicker";

const Palette = () => {
  const [mainIndex, setMainIndex] = useState(0);
  const [step, setStep] = useState(0.2);
  const [colors, setColors] = useState(
    createMonochromePalette(rgbRandom(), mainIndex, step)
  );
  return <div className="Palette"></div>;
};
