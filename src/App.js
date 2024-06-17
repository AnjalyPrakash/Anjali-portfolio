import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import PortFolio from './Pages/PortFolio';
import EventManagement from './Projects/EventManagement';
import WeatherApp from './Projects/WeatherApp';
import MediaPlayer from './Projects/MediaPlayer';
import CounterApp from './Projects/CounterApp';
import Netflix from './Projects/Netflix';
import Byjus from './Projects/Byjus';
import Ecart from './Projects/Ecart';
import TravelWeb from './Projects/TravelWeb';
import Restaurant from './Projects/Restaurant';
import DarkMode from './Theme/DarkMode';
import Contact from './Pages/Contact';

function App() {
  return (
    <div>
      {/* <Header/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/portfolio' element={<PortFolio/>}/>
        <Route path='/event-management' element={<EventManagement/>}/>
        <Route path='/weather-app' element={<WeatherApp/>}/>
        <Route path='/media-player' element={<MediaPlayer/>}/>
        <Route path='/counter-app' element={<CounterApp/>}/>
        <Route path='/netflix' element={<Netflix/>}/>
        <Route path='/byjus' element={<Byjus/>}/>
        <Route path='/e-cart' element={<Ecart/>}/>
        <Route path='/travel' element={<TravelWeb/>}/>
        <Route path='/restaurant-web' element={<Restaurant/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
