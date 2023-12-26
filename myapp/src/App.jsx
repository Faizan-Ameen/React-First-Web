import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Menu from './Components/Menu';
import CardData from './Components/CardData';

const App = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/about' Component={About} />
        <Route path='/contact' Component={Contact} />
        <Route path='/services' Component={Services} />
      </Routes>
    </>
  )
}

export default App;
