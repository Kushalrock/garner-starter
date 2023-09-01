import React from "react";
import Chart from "react-apexcharts";

const MyChartComponent = ({ financialData }) => {
  const options = {
    chart: {
      type: "candlestick",
      height: 350,
    },
    title: {
      text: "CandleStick Chart",
      align: "left",
    },
    xaxis: {
      type: "datetime",
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={financialData.map((data) => data)}
            type="candlestick"
            width="300"
          />
        </div>
      </div>
    </div>
  );
};

export default MyChartComponent;
