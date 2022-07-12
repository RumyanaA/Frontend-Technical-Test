import './App.css';
import { Routes, Route } from 'react-router-dom';
import MarketCoins from './MarketCoins';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MarketCoins />} />
    </Routes>
  )
}

export default App;
