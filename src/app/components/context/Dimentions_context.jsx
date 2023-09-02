"use client";
import React, { createContext, useState } from "react";
export const Dimentions_context = createContext();
export const Dimentions_contextProvider = ({ children }) => {
  let [dimention, setDimention] = useState({ Row: 1, Column: 1 });
  let [SelectedOption, setSelectOption] = useState([
    { value: "ethereum", label: "Ethereum" },
  ]);

  let handleChange = (data) => {
    data.length==0 ? setDimention({...dimention,Row:0,Column:0}):data.length==1?setDimention({...dimention,Row: 1, Column: 1}):
    dimention.Row * dimention.Column < data.length
      ? setDimention({ ...dimention, Row: dimention.Row + 1 })
      : dimention.Row * dimention.Column > data.length
      ? (dimention.Row - 1) * dimention.Column == data.length &&
        dimention.Row > 1
        ? setDimention({ ...dimention, Row: dimention.Row - 1 })
        : setDimention({ ...dimention, Column: dimention.Column - 1 })
      : null;

    setSelectOption(data);
  };
  const RowCount = (a) => {
    if (a === "minus") {
      dimention.Row > 1 &&
      (dimention.Row - 1) * dimention.Column < SelectedOption.length
        ? setDimention({
            ...dimention,
            Row: dimention.Row - 1,
            Column: dimention.Column + 1,
          })
        : dimention.Row > 1 &&
          (dimention.Row - 1) * dimention.Column == SelectedOption.length
        ? setDimention({ ...dimention, Row: dimention.Row - 1 })
        : null;
    } else {
      dimention.Row < SelectedOption.length &&
      dimention.Row + 1 * dimention.Column > SelectedOption.length
        ? setDimention({
            ...dimention,
            Row: dimention.Row + 1,
            Column: dimention.Column - 1,
          })
        : dimention.Row < SelectedOption.length &&
          dimention.Row + 1 * dimention.Column == SelectedOption.length
        ? setDimention({ ...dimention, Row: dimention.Row + 1 })
        : null;
    }
  };

  const ColumnCount = (a) => {
    if (a === "minus") {
      dimention.Column > 1 &&
      dimention.Row * (dimention.Column - 1) < SelectedOption.length
        ? setDimention({
            ...dimention,
            Column: dimention.Column - 1,
            Row: dimention.Row + 1,
          })
        : dimention.Column > 1 &&
          (dimention.Column - 1) * dimention.Row == SelectedOption.length
        ? setDimention({ ...dimention, Column: dimention.Column - 1 })
        : null;
    } else {
      dimention.Column < SelectedOption.length &&
      dimention.Row * (dimention.Column + 1) > SelectedOption.length
        ? setDimention({
            ...dimention,
            Row: dimention.Row - 1,
            Column: dimention.Column + 1,
          })
        : dimention.Column < SelectedOption.length &&
          dimention.Row * (dimention.Column + 1) == SelectedOption.length
        ? setDimention({ ...dimention, Column: dimention.Column + 1 })
        : null;
    }
  };

  return (
    <Dimentions_context.Provider
      value={{ dimention, ColumnCount, RowCount, SelectedOption, handleChange }}
    >
      {children}
    </Dimentions_context.Provider>
  );
};
