import React from "react";
import before from "../images/after.png";
import after from "../images/before.png";

import instruction from "../images/instruction.png";

const ImageDisplay = () => {
  return (
    <div>
      <div className="ui fade reveal image">
        <img src={before} className="ui fluid image visible content" />
        <img src={after} className="ui fluid image hidden content" />
      </div>
      <img src={instruction} className="ui fluid image" />
    </div>
  );
};

export default ImageDisplay;
