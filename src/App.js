import { useEffect } from 'react';
import Header from './components/Header';
import Slider from './components/home/Slider';
import Loading from './components/Loading';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import './styles/App.scss';

function App() {
  useEffect(()=>{
    // mobile device
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  },[])
  return (
    <section>
        <Loading />
        <Header />
        <Navigation />
    <div className="App">
        <Home />
    </div>
        <Slider />
    </section>

  );
}

export default App;
