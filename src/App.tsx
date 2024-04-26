import "./App.css";
import Card from "./components/Card";
import Toolbar from "./components/Toolbar";
import TagWidget from "./tags/components/TagWidget";

function App() {
  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
      <Toolbar />
      <TagWidget />
    </div>
  );
}

export default App;
