import './App.css';
import VendingMachine from './VendingMachine';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Doritos from "./Doritos"
import Pancakes from "./Pancakes"
import Snickers from "./Snickers"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/food/doritos" element={<Doritos />} />
          <Route path="/food/pancakes" element={<Pancakes />} />
          <Route path="/food/snickers" element={<Snickers />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
