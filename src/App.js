import Home from "./Components/Home/Home";
import Info from "./Components/Info/Info";
import Info1 from "./Components/Info1/Info1";
import Ourwork from "./Components/OurWork/Ourwork";
import Ourpartner from "./Components/OurPartners/Ourpartner";
import Testimonals from "./Components/Testimonals/Testimonals";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Info />
      <Info1 />
      <Ourwork />
      <Ourpartner />
      <Testimonals />
      <Footer />
    </>
  );
}

export default App;
