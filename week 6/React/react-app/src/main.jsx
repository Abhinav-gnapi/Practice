import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Text from './Footer.jsx'
import DateGreeter from './DateGreeter.jsx'
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer.jsx'
import Bugatti from './assets/bugatti-divo-2018-4k-xu.jpg'
import Porsche from './assets/porsche.webp'
import Lambo from './assets/TG LAMBO230309_0013.jpg'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Footer/>
    <DateGreeter /> */}
    <Header />
    <Card name="Bugatti" img={Bugatti} imgAlt="bugatti img" price="3.2 Cr"  class="bugu"/>
    <Card name="Porsche" img={Porsche} imgAlt="porsche img" price="1.6 Cr"/>
    <Card name="Lamborgini" img={Lambo} price="2.4 Cr"/>
    {/* <Footer /> */}
  </StrictMode>,
)
