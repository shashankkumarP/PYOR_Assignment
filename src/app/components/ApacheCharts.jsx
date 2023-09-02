"use client";
import React, { useEffect, useRef } from "react";
import { init } from "echarts";

const ApacheCharts = ({ data, name }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = init(chartRef.current);

    const options = {
      title: {
        text: `${name.label} Market Price Chart`,
      },
      xAxis: {
        type: "category",
        data: data.prices.map((entry) =>
          new Date(entry[0]).toLocaleDateString()
        ),
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: data.prices.map((entry) => entry[1]),
          type: "line",
          areaStyle: {
            color: "rgba(0, 128, 255, 0.3)",
          },
          smooth: true,
        },
      ],
    };

    chart.setOption(options);

    return () => {
      chart.dispose();
    };
  }, [data]);

  return <div ref={chartRef} style={{ width: "98%", height: "300px" }} />;
};

export default ApacheCharts;
