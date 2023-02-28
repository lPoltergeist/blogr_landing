import PageTitle from "./components/header/header";
import "./globalstyles/globalstyles.css"
import DesignFuture from "./pages/DesignedToFuture/DesignFuture";
import MiddleArt from "./components/MidleArt/MidleArt";
import FreeOpenSimple from "./pages/freeOpenSimplePage/freeOpenSimple";
import Footer from "./components/footer/footer";
import Navbar from "./components/Navbar/navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <PageTitle />
      <DesignFuture />
      <MiddleArt />
      <FreeOpenSimple />
      <Footer />
    </div>
  );
}

export default App;
