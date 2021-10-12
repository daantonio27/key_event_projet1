import React from "react";
import { MdHome, MdEditCalendar, MdMoney, MdPointOfSale } from "react-icons/md";

const Navbar = ({ show }) => {
  return (
    <div className={show ? "sidenav active" : "sidenav"}>
      <ul>
        <li>
          <MdHome /> Tableau de bord
        </li>
        <li>
          <MdEditCalendar />
          Evénement
        </li>
        <li>
          <MdMoney />
          Finances
        </li>
        <li>
          <MdPointOfSale />
          Promotion
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
