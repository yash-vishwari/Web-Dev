import Header from './components/Header.jsx';
import Home from'./pages/Home.jsx'
import About from "./pages/About.jsx";
import Product from "./pages/Product.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import "./App.css"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
         
        </Routes>
      </BrowserRouter>
      {}
    </>
  );
}

export default App;
