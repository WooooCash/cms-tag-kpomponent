import "./App.css";
import Toolbar from "./components/Toolbar";
import TagWidget from "./tags/components/TagWidget";

function App() {
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        gap: "1rem",
        alignItems: "flex-start",
      }}
    >
      <Toolbar />
      <TagWidget />
    </div>
  );
}

export default App;
