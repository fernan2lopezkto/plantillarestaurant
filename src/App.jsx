import AlertPlantilla from "./components/AlertPlantilla";
import Home from "./components/Home";
import Especialidad from "./components/Especialidad";
import Restaurant from "./components/Restaurant";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes";
import About from "./components/About";
import Reservas from "./components/Reservas";

function App() {
  return (
    <>
      <AlertPlantilla />
      <Home />
      <Especialidad />
      <Restaurant />
      <Reservas />
      <PreguntasFrecuentes />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
