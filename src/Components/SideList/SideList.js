import React from "react";
import "./SideList.css";

const sideList = [
  "Dashboard",
  "Inventory",
  "Order",
  "Returns",
  "Customers",
  "Shipping",
  "Channel",
  "Integrations",
];

const SideList = () => {
  return (
    <div className="side-list-container">
      <ul className="list-container">
        {sideList.map((list, index) => (
          <li key={index}>{list}</li>
        ))}
      </ul>
      <div className="dropdown-container">
        <select>
          <option>Calculators</option>
        </select>
        <select>
          <option>Reports</option>
        </select>
        <select>
          <option>Account</option>
        </select>
      </div>
    </div>
  );
};

export default SideList;
