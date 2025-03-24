import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import FasciaAzzurra from "./components/FasciaAzzurra.jsx";
import Footer from "./components/Footer.jsx";
import Comics from "./components/ComicsList.jsx";

function App() {
  return (
    <>
      <Header />
      <Main comics={Comics} />
      <FasciaAzzurra />
      <Footer />
    </>
  );
}
export default App;
