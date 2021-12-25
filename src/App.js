import './App.css';
import Clients from './components/Clients/Clients';
import Contact from './components/Contact/Contact';
import Download from './components/Download/Download';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Services from './components/Services/Services';
import Slider from './components/Slider/Slider';
import Testimonials from './components/Testimonials/Testimonials';
import Workers from './components/Workers/Workers';
import what from './assets/Image 6.png';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [number, setNumber] = useState();

  const getNumber = async () => {
    let { data } = await axios.get("https://mgalbackend.augresearch.com/api/General/home");
    setNumber(data.data.setting.whatsapp.substring(1))
  }

  
  useEffect(() => {
    getNumber();
  }, [])

  return (
    <div className="App">
      <Header />
      <Slider />
      <Workers />
      <Services />
      <Faq />
      <Clients />
      <Testimonials />
      <Download />
      <Contact />
      <div className='whatsapp position-fixed'>
        <a href={"https://wa.me/" + number}><img src={what} alt="whats" /></a>
      </div>
    </div>
  );
}

export default App;
