import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter,Routes,Route} from "react-router-dom";
import About from "./components/About";
import Admin from "./components/Admin";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Notfound from "./components/Notfound";
import Navbar from "./components/Navbar";
import Authroute from "./components/Authroute";
import Article from "./components/Article";

function App() {
  return (
    <div>

     <BrowserRouter>
     <Navbar/>
     
     <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/about" element={<About/>} />
      <Route exact path="/contact" element={<Contact/>} />
      <Route exact path="/article" element={<Article/>} />
      <Route path="*" element={<Notfound/>} />
      <Route exact path="/admin" element={
      <Authroute>
      <Admin/>
     </Authroute>} />
     
     </Routes>
     
     </BrowserRouter>
    </div>
  );
}

export default App;
