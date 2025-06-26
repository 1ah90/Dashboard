import './App.css';
import Hero from './components/Hero/Hero';
import Nav from './components/NavBar/Nav'
;

const containerStyle = {
  width: '90%',
  margin: 'auto',
  backgroundColor: '#F8FAFB',
};
function App() {
  return (
    <div className="App">
      <div className="container" style={containerStyle}>
        <Nav />
        <Hero />
      </div>
    </div>
  );
}

export default App;
