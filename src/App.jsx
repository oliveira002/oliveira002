import './App.css';
import { Navbar } from "./components/header/Navbar";
import { Intro } from "./components/intro/Intro";
import { Projects } from './components/projects/Projects';
import { About } from "./components/about/About"
import {Myself} from "./components/me/Myself"
import {Contact} from "./components/contact/Contact"

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Projects/>
      <Myself/>
      <Contact/>
    </div>
  );
}


export default App;
