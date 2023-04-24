import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div className="VendingMachine">
      <h1>Welcome to our vending machine!</h1>
      <h4>Select an item below!</h4>
      <ul>
        <li>
          <Link to="/food/doritos">Doritos</Link>
        </li>
        <li>
          <Link to="/food/pancakes">Pancakes</Link>
        </li>
        <li>
          <Link to="/food/snickers">Snickers</Link>
        </li>
      </ul>
    </div>
  );
}

export default VendingMachine;
