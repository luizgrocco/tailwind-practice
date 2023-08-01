import { useState } from "react";

export const App = () => {
  const [color, setColor] = useState("bg-[#4287f5]");

  return (
    <div>
      <h1 className={`border-4 ${color}`}>Hello world!</h1>
      <button
        onClick={() =>
          setColor((prevColor) =>
            prevColor === "bg-[#4287f5]" ? "bg-[#f50000]" : "bg-[#4287f5]"
          )
        }
      >
        Change color!
      </button>
    </div>
  );
};
