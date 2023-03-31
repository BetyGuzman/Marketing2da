import Header from "./components/Header";
import Aboutd from "./components/Aboutd";
import Servicesd from "./components/Servicesd";
import Teamd from "./components/Teamd";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Home from "./components/Home";
import {BrowserRouter,  Routes, Route} from 'react-router-dom';
import './estilos.css';


function App() {
  return (
    <div className="Headerr" >
      
 
      <main className="Main">
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<Aboutd/>}/>
            <Route path="/services" element={<Servicesd/>}/>
            <Route path="/team" element={<Teamd/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
        <Footer/>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;