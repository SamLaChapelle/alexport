import Header from "./components/header.js";
import Services from "./components/services.js";
import MyWork from "./components/mywork.js";
import About from "./components/about.js";
import Footer from "./components/footer.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <MyWork />
      <About />
      <Footer />
    </div>
  );
}

export default App;
