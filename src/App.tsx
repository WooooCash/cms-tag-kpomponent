import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Toolbar from "./components/Toolbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Toolbar />
    </>
  );
}

export default App;
