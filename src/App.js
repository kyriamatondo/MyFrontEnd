
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from "./components/Home";
import ListProducts from "./components/ListProducts";
import Addproduct from "./components/Addproduct";

function App() {
  return (
      <BrowserRouter>
          <Navbar/>
          <ToastContainer style={{color:"green"}} position='top-center'/>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/products" element={<ListProducts/>}/>
              <Route path="/add" element={<Addproduct/>}/>
              <Route path="/edit/:id" element={<Addproduct/>}/>
          </Routes>
      </BrowserRouter>



  );
}

export default App;
