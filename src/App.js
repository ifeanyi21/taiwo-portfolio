import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/scrollToTop";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App bg-white">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout children={<Home />} />} />
          <Route path="/about" element={<Layout children={<About />} />} />
          <Route path="/contact" element={<Layout children={<Contact />} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
