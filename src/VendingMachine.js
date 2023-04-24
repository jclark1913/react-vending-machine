import React from "react";
import { BrowserRouter, useNavigate, Route, Routes } from "react-router-dom";
import Food from "./Food"

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <BrowserRouter>
        <Routes>
          <Route path="/food/:name" element={<Food />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default VendingMachine;