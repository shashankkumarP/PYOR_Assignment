"use client";
import React, { useContext, useEffect, useState } from "react";
import { StyledComponentWithParams } from "../utils/stylecomponent";
import { Dimentions_context } from "./context/Dimentions_context";
import { FetchCryptoCurrencies } from "../utils/fetching_data";
import ApexCharts from "./ApacheCharts";

const Display = () => {
  const { dimention, SelectedOption } = useContext<any>(Dimentions_context);
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    (async function Datasetting() {
      let result = await FetchCryptoCurrencies(SelectedOption);
      setData([...result]);
    })();
  }, [SelectedOption,dimention]);

  return (
    <StyledComponentWithParams Row={dimention.Row} Column={dimention.Column}>
      {data.length != 0
        ? data.map((el: any, i: any) => (
            <ApexCharts key={i} data={el} name={SelectedOption[i]} />
          ))
        : <h1 style={{textAlign:"center"}} >...Loading</h1>}
    </StyledComponentWithParams>
  );
};

export default Display;
