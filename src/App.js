import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/home/index";
import Beers from './components/beers/beers';
import NewBeer from './components/new-beer/new-beer';
import RandomBeer from './components/random-beer/random-beer';
import NavBar from './components/NavBar/NavBar';


function App() {
  return (
    <div className="App">
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beers" element={<Beers />} />
        <Route path="/new-beer" element={<NewBeer />} />
        <Route path="/random-beer" element={<RandomBeer />} />
      </Routes>
    </div>
  );
}

export default App;
