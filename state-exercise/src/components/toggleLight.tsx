import { useState } from "react";

const toggleLight = () => {
  const [isLightsOn, setIsLightOn] = useState<boolean>(true);

  const handleLights = () => {
    setIsLightOn((current) => !current);
  };
  return (
    <div id="lightToggle">
      <div
        style={{
          backgroundColor: isLightsOn ? "white" : "gray",
          color: isLightsOn ? "black" : "white",
        }}
      >
        Light div
      </div>
      <button onClick={handleLights}>
        {isLightsOn ? "Lights off" : "Lights on"}
      </button>
    </div>
  );
};

export default toggleLight;
