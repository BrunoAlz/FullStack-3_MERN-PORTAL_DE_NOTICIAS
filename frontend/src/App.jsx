import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import { news } from "./data/data.mock";
import { GlobalStyle } from "./GlobalStyled";
import Home from "./pages/Home/Home";

function App() {
  const data = news;

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home />
    </>
  );
}

export default App;
