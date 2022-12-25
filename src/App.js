import logo from './logo.svg';
import './App.css';
import { Navbar } from "./components/header/Navbar";
import { Intro } from "./components/intro/Intro";
import { Projects } from './components/projects/Projects';
import { About } from "./components/about/About"

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Projects/>
    </div>
  );
}


export default App;
