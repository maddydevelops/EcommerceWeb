import "./App.css";
import Footer from "./assets/components/Footer";
import Home from "./assets/components/Home";
import Navbar from "./assets/components/Navbar";


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Home />
     
      <Footer />
    </div>
  );
}

export default App;
