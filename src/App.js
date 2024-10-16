import './App.css';
import ParticlesComponent from './components/particles'; // Ensure proper import path

function App() {
  return (
    <div className="App" style={{ position: 'relative' }}>
      {/* Ensure the id matches what the Particles component is expecting */}
      <ParticlesComponent id="tsparticles"  />
      <div style={{ position:'absolute', zIndex:1 }}>
      <h1>this is the firefly particles demo</h1>
      </div>
    </div>
  );
}

export default App;
