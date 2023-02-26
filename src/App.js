import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import './styles/Global.scss';

function App() {
  return (
    <main className="App">
      <Sidebar />
      <Home />
    </main>
  );
}

export default App;
