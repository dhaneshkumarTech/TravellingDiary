import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TripCard from './components/TripCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TripCard/>
    </div>
  );
}

export default App;
