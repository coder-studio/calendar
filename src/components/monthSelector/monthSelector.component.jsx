//Libraries
import React from "react";

//Components
import momento from "moment";
import "moment/locale/pt-br";

//Styles
import "./monthSelector.styles.scss";

export const MonthSelector = ({ currentMonth, onMonthChange }) => (
  <select className="month-select" onChange={onMonthChange}>
    <option selected={currentMonth === "1"}>Janeiro</option>
    <option selected={currentMonth === "2"}>Fevereiro</option>
    <option selected={currentMonth === "3"}>Março</option>
    <option selected={currentMonth === "4"}>Abril</option>
    <option selected={currentMonth === "5"}>Maio</option>
    <option selected={currentMonth === "6"}>Junho</option>
    <option selected={currentMonth === "7"}>Julho</option>
    <option selected={currentMonth === "8"}>Agosto</option>
    <option selected={currentMonth === "9"}>Setembro</option>
    <option selected={currentMonth === "10"}>Outubro</option>
    <option selected={currentMonth === "11"}>Novembro</option>
    <option selected={currentMonth === "12"}>Dezembro</option>
  </select>
);
