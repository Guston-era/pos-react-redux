import React from "react";
import "../../css/subscreens.css";
import MiniSideBarReports from "../../components/layout/MiniSideBarReports";
import { Line, Bar, Pie, Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { ResizeObserver as ResizeObserverPolyfill } from "@juggle/resize-observer";

const StatusReport = () => {
  if (typeof window !== "undefined") {
    window.ResizeObserver = window.ResizeObserver || ResizeObserverPolyfill;
  }
  // single bar chart
  const SingleBarData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        id: 1,
        label: "Sales",
        // backgroundColor: "#ea7c69",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  // multi bar data
  const MultiBarData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        id: 1,
        label: "Sales",
        backgroundColor: "#ea7c69",

        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
      {
        id: 2,
        label: "Expenses",
        backgroundColor: "green",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [70, 49, 60, 51, 56],
      },
    ],
  };
  const pieData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: [65, 59, 80, 81, 56],
      },
      {
        label: "Expenses",
        backgroundColor: [
          "#B21F00",
          "#C9DE00",
          "#2FDE00",
          "#00A6B4",
          "#6800B4",
        ],
        hoverBackgroundColor: [
          "#501800",
          "#4B5000",
          "#175000",
          "#003350",
          "#35014F",
        ],
        data: [70, 49, 60, 51, 56],
      },
    ],
  };

  return (
    <div className="flexed-content">
      <MiniSideBarReports active="status" />
      <div className="reports-panel">
        <Line
          style={{ backgroundColor: "white" }}
          datasetIdKey="id"
          data={MultiBarData}
        />
        <p>Line Graph</p>
        {/* bar graph */}
        <Bar
          data={MultiBarData}
          datasetIdKey="id"
          options={{
            title: {
              display: true,
              text: "Average Sales per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
        <p>MultiBarData</p>
        <Bar
          data={SingleBarData}
          options={{
            title: {
              display: true,
              text: "Average Sales per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
        <p>SingleBarData</p>
        <Pie
          data={MultiBarData}
          options={{
            title: {
              display: true,
              text: "Average Sales per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
        <p>Plain Multi Data Pie Graph</p>

        <Pie
          data={SingleBarData}
          options={{
            title: {
              display: true,
              text: "Average Sales per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
        <p>Single colorful Data Pie Graph</p>

        <Pie
          data={pieData}
          options={{
            title: {
              display: true,
              text: "Average Sales per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
        <p>Colorful Multi Data Pie Graph</p>
        <Doughnut
          data={MultiBarData}
          options={{
            title: {
              display: true,
              text: "Average Sales per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
        <p>Plain Multi Data Doughnut Graph</p>

        <Doughnut
          data={SingleBarData}
          options={{
            title: {
              display: true,
              text: "Average Sales per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
        <p>Single colorful Data Doughnut Graph</p>

        <Doughnut
          data={pieData}
          options={{
            title: {
              display: true,
              text: "Average Sales per month",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
        <p>Colorful Multi Data Doughnut Graph</p>
      </div>
    </div>
  );
};

export default StatusReport;
