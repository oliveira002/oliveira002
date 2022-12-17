import logo from './logo.svg';
import './App.css';
import { Navbar } from "./components/header/Navbar";
import { Intro } from "./components/intro/Intro";

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Intro/>
    </div>
  );
}


export default App;
