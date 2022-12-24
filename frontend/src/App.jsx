import "./App.css";

import { news } from "./data/data.mock";
import Home from "./pages/Home/Home";

function App() {
  const data = news;

  return (
    <Home />
  );
}

export default App;
