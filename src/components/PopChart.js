import { useState, useEffect } from "react";
import Chart from "react-apexcharts";

const PopChart = () => {
  const [horizontal, setHorizontal] = useState(false);
  const [series, setSeries] = useState([
    {
      name: "Population",
      data: [
        1103488,
        150917,
        107394,
        56388,
        44569,
        45711,
        52808,
        32034,
        25066,
        20223,
      ],
    },
  ]);
  const [options, setOptions] = useState({
    chart: {
      height: 450,
      width: "100%",
      type: "bar",
      background: "#f4f4f4",
      foreColor: "#333",
    },
    plotOptions: {
      bar: {
        horizontal: horizontal,
      },
    },
    xaxis: {
      categories: [
        "Yerevan",
        "Gyumri",
        "Vanadzor",
        "Houston",
        "Vagharshapat",
        "Abovyan",
        "Kapan",
        "Hrazdan",
        "Armavir",
        "Artashat",
      ],
    },
    fill: {
      colors: ["#F44336"],
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Largest cities in Armenia by population",
      align: "center",
      margin: 20,
      offsetY: 20,
      style: {
        fontSize: "30px",
      },
    },
  });

  const onClick = (e) => {
    setHorizontal(!horizontal);
    setOptions({
      ...options,
      plotOptions: {
        ...options.plotOptions,
        bar: {
          ...options.plotOptions.bar,
          horizontal: !horizontal,
        },
      },
    });
  };

  return (
    <>
      <Chart options={options} series={series} type="bar" width="1000" />
      <button onClick={onClick}>
        {!horizontal ? "Horizontal" : "Vertical"}
      </button>
    </>
  );
};

export default PopChart;
