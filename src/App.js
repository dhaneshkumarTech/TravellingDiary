import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TripCard from './components/TripCard';
import tripData from './model/tripData';

function App() {
  const card = tripData.map(tripCard => <TripCard {...tripCard} />)

  return (
    <div className="App">
      <Navbar />
      {card}
    </div>
  );
}

export default App;
