import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import { news } from "./data/data.mock";
import Home from "./pages/Home/Home";

function App() {
  const data = news;

  return (
    <section>
      <Navbar />
      <Home />
    </section>
  );
}

export default App;
