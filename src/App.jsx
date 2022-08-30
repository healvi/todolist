import "./App.scss";
import Navbar from "./components/Navbar";
import { Routers } from "./routes";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routers />
    </div>
  );
}

export default App;
