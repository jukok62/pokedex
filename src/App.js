import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import Pokemons from './pages/Pokemons';

function App() {
  return (
 <>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Pokemons/>}/>
    </Routes>
  </BrowserRouter>
 </>
  );
}

export default App;
