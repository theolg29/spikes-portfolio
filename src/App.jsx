import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
