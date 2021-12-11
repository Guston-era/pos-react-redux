import React from "react";
import "../../css/subscreens.css";
import MiniSideBarReports from "../../components/layout/MiniSideBarReports";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { ResizeObserver as ResizeObserverPolyfill } from "@juggle/resize-observer";

const StatusReport = () => {
  if (typeof window !== "undefined") {
    window.ResizeObserver = window.ResizeObserver || ResizeObserverPolyfill;
  }
  return (
    <div className="flexed-content">
      <MiniSideBarReports active="status" />
      <div className="reports-panel">
        <Line
          style={{ backgroundColor: "white" }}
          datasetIdKey="id"
          data={{
            labels: ["Jun", "Jul", "Aug"],
            datasets: [
              {
                id: 1,
                label: "m",
                data: [5, 6, 7],
              },
              {
                id: 2,
                label: "d",
                data: [3, 2, 1],
              },
            ],
          }}
        />
      </div>
    </div>
  );
};

export default StatusReport;
