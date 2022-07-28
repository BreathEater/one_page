import './App.css';
import { Hero } from './Hero/Hero';
import { Navbar } from './Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <Hero/>
      </header>
    </div>
  );
}

export default App;
