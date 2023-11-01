import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Services from './components/layout/Services';
import Contact from './components/layout/Contact';
import RoutesList from './components/routing/RoutesList';

// import Landing from './components/layout/Landing';
// import RoutesList from './components/routing/RoutesList';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<div>
          <Landing id="landing" />
          <Services id="services" />
          <Contact id="contact" />
        </div>} />
        <Route path='*' element={<RoutesList />} />
      </Routes>
    </Router>
  );
}

export default App;

