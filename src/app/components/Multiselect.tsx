"use client";
import React, { useContext, useState } from "react";
import Select from "react-select";
import { Dimentions_context } from "./context/Dimentions_context";

const Multiselect = () => {
  let { SelectedOption, handleChange } = useContext(Dimentions_context);
  const options: any = [
    { value: "ethereum", label: "Ethereum" },
    { value: "dogecoin", label: "Dogecoin" },
    { value: "solana", label: "Solana" },
  ];

  return (
    <Select
      options={options}
      onChange={handleChange}
      placeholder="Select color"
      value={SelectedOption}
      isSearchable={true}
      isMulti={true}

    />
  );
};

export default Multiselect;
