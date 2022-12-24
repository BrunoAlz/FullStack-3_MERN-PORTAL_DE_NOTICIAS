import "./App.css";

import { news } from "./data/data.mock";

function App() {
  const data = news;

  return (
    <div className="App">
      {data.map((noticia) => (
        <div>
          <p>{noticia.title}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
