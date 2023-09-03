"use client";
import React, { useContext } from "react";
import { Dimentions_context } from "./context/Dimentions_context";

const Button = ({ direction }: { direction: string }) => {
  let { dimention, ColumnCount, RowCount } = useContext(Dimentions_context);

  const handleChange = (a: string) => {
    direction == "Row" ? RowCount(a) : ColumnCount(a);
  };

  
  return (
    <div
      style={{
        display: "flex",
        gap: "1px",
        justifyContent: "left",
        alignItems: "center",
      }}
    >
      <div style={{  width: "70px",fontSize:"large",fontWeight:"500" }}>{direction}</div>
      <div className="quantity">
        <a className="quantity__minus" onClick={() => handleChange("minus")}>
          <span>-</span>
        </a>
        <input
          name="quantity"
          type="text"
          className="quantity__input"
          value={direction == "Row" ? dimention.Row : dimention.Column}
        />
        <a className="quantity__plus" onClick={() => handleChange("plus")}>
          <span>+</span>
        </a>
      </div>
    </div>
  );
};

export default Button;
