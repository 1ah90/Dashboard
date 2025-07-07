import './App.css';
import Hero from './Pages/HeroPage/Hero';
import Nav from './components/NavBar/Nav';
import { Route, Routes } from 'react-router-dom';
import Monitor from './Pages/MonitorPage/Monitor';
function App() {
  return (
    <div className="App font-sans">
      <Nav />
      <Routes>
        <Route path="/Hero" element={<Hero />} />
        <Route path="/Monitor" element={<Monitor />} />
      </Routes>
    </div>
  );
}

export default App;
