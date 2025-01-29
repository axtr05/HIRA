import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="doctors">
          <Doctors />
        </div>

        <div id="contact">
          <ContactSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;