import Navbar from './components/navbar';
import Drawbar from './components/drawbar';
import Board from './components/board';
import Footer from './components/footer';
import "./styles/style.css";
import "./styles/normalize.css";

function App() {
  return (
    <div className="App" id="App">
      <Navbar></Navbar>
      <Drawbar></Drawbar>
      <Board></Board>
      <Footer></Footer>
    </div>
  );
}

export default App;
