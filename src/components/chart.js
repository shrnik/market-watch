import React, { Component } from "react";
import { Line } from "react-chartjs-2";

const data = (canvas) => {

  const ctx = canvas.getContext("2d")
	const gradient = ctx.createLinearGradient(0, 0, 0, 450);

  gradient.addColorStop(0, 'rgb(12, 219, 12,0.5)');
  gradient.addColorStop(1, 'rgb(12, 219, 12,0)');
  return {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Data",
        lineTension: 0.1,
        backgroundColor: gradient,
        borderColor: "rgb(12, 219, 12)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      }
    ]
  };
};

export default class LineDemo extends Component {
  render() {
    return (
      <div className="chartArea">
      <h1>Plot</h1>
        <Line ref="chart" data={data} />
      </div>
    );
  }

  componentDidMount() {
    const { datasets } = this.refs.chart.chartInstance.data;
    console.log(datasets[0].data);
  }
}
