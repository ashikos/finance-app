import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards/>
      <Footer />




    {/* <div >
        <div className="max-w-[1240px] mx-auto h-[200px]  bg-white">
          <div className="w-[20px] bg-slate-500 h-[20px]" ></div>
        </div>
        <div className="w-full h-[200px]  bg-slate-600"></div>
        <div className="w-full h-[200px]  bg-slate-400"></div>
      
    </div> */}


    </div>
    
  );
}

export default App;
