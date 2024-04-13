"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,

      position: "top",
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
  scales: {
    
    // to remove the labels
    x: {
      display:false,
      ticks: {
        display: false,
      },

      // to remove the x-axis grid
      grid: {
        drawBorder: false,
        borderColor: "#B5DCF2",
        display: false,
        color: "#B5DCF2",
      },
    },
    // to remove the y-axis labels
    y: {
      display:false,
      ticks: {
        display: false,
        beginAtZero: true,
      },
      // to remove the y-axis grid
      grid: {
        borderColor: "#B5DCF2",
        drawBorder: false,
        display: false,
        color: "#B5DCF2",
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => Math.random()) ,
      backgroundColor: "black",
    },
  ],
};

export function TopCategoriesChart() {
  return <Bar options={options} data={data} />;
}
