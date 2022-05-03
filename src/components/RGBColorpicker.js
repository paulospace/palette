const RGBColorpicker = ({
  color,
  colorChanged,
  index,
  isMainIndex,
  changeIndex
}) => {
  const handleChange = (e, channel) => {
    let newColor;
    let value = e.target.value;
    switch (channel) {
      case 0:
        newColor = [value, color[1], color[2]];
        break;
      case 1:
        newColor = [color[1], value, color[2]];
        break;
      case 2:
        newColor = [color[0], color[1], value];
        break;
    }
    colorChanged(newColor, index);
  };

  return (
    <div className="RGBColorpicker">
      <div className="RGBColorpicker-preview"></div>
      <div className="RGBColorpicker-inputs">
        <div className="RGBColorpicker-inputs--input">
          R:{" "}
          <input
            type="range"
            min="0"
            max="255"
            value={color[0]}
            onChange={(e) => handleChange(e, 0)}
          />
        </div>
        <div className="RGBColorpicker-inputs--input">
          G:{" "}
          <input
            type="range"
            min="0"
            max="255"
            value={color[1]}
            onChange={(e) => handleChange(e, 1)}
          />
        </div>
        <div className="RGBColorpicker-inputs--input">
          B:{" "}
          <input
            type="range"
            min="0"
            max="255"
            value={color[1]}
            onChange={(e) => handleChange(e, 1)}
          />
        </div>
      </div>
    </div>
  );
};

export RGBColorpicker;