import React from "react";
import About from "./About";
import Banner from "./Banner";
import Services from "./Services";
import Team from "./Team";
import '../estilos.css';

function Home() {
  return (
    <div className="Headerr" >      
      <main className="Main">
        <Banner/>
        <About/>
        <Services/>
        <Team/>
      </main>
    </div>
  );
}

export default Home;