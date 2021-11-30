import { useEffect } from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Loading from './components/Loading';
import Navigation from './components/Navigation';
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
        <Banner />
    </div>
    </section>

  );
}

export default App;
