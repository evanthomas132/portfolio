
import Header from './components/Header/Header'
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import { Routes, Route } from 'react-router-dom'
import "./index.css";
import AllProducts from './components/AllProjects/AllProducts';
import About from './components/About/About'
import Contact from './components/Contact/Contact';
import {BsFillArrowUpCircleFill} from 'react-icons/bs'
function App() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Navbar />
      <BsFillArrowUpCircleFill onClick={scrollToTop}  className='up_arrow'/>
      <Routes>
        <Route path="/" element={<><Header /><Projects /> <About /> <Contact /></>} />
        <Route path='/projects' element={<AllProducts />} />
      </Routes>
    </div>
  );
}

export default App;
