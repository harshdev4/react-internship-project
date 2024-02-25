import Navbar from "./components/Navbar";
import "./App.scss";
import Home from "./components/Home";
import ToolContextProvider from "./store/ToolContext";
import Footer from "./components/Footer";
function App() {
  return (
    <ToolContextProvider>
      <Navbar/>
      <div className="App">
        <div className="container">
            <h1 className="heroHeading">Best Website builders in the US</h1>
            <Home></Home>
        </div>
      </div>
      <Footer />
    </ToolContextProvider>
  )
}

export default App
