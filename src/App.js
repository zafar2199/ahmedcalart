import { useEffect } from "react";
import "./styles/App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// coponents
import Header from "./components/Header";
import Loading from "./components/Loading";
import Navigation from "./components/Navigation";

//page
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

//path element routes
const routes = [
  { path: "/", name: "Home", element: <Home /> },
  { path: "/portfolio", name: "Project", element: <Portfolio /> },
  { path: "/about", name: "About", element: <About /> },
];

function App() {
  useEffect(() => {
    // mobile device
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, []);
  return (
    <>
      <Loading />
      <Header />
      <Navigation />
      <div className="App">
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
