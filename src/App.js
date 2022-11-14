import { Route, Routes } from 'react-router-dom';
import './App.css';
import Beers from './components/beers/beers';
import Home from "./components/home";
import NewBeer from './components/new-beer/new-beer';
import RandomBeer from './components/random-beer/random-beer';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/beers" element={<Beers />}></Route>
        <Route path="/new-beer" element={<NewBeer />}></Route>
        <Route path="/random-beer" element={<RandomBeer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
