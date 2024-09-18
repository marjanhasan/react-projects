import { useState } from "react";
import NavBar from "./NavBar";

const App = () => {
  const [color, setColor] = useState("bg-black");
  return (
    <div className={`flex justify-center items-end h-lvh ${color}`}>
      <NavBar setColor={setColor} />
    </div>
  );
};

export default App;
