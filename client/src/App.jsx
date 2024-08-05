import { useState } from "react";
import { Collections } from "./components/Collections/Collections";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <Collections />;
}

export default App;
