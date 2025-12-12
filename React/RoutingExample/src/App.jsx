import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Products from './component/Product'
import {CarProducts, BikeProducts,} from './component/Product'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <nav>
            <Link to="/Home.jsx">Home</Link> | {" "}
            <Link to="/About">About</Link> | {" "}
            <Link to="/Contact.jsx">Contact</Link> | {" "}
            <Link to="/products">Products</Link>
        </nav>

        <Routes>
          <Route path="/Home.jsx" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact.jsx" element={<Contact />} />
          <Route path="/products" element={<Products />} >
            <Route path='car' element={<CarProducts />} />
            <Route path='bike' element={<BikeProducts />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
