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
const plugin = {
  id: 'customCanvasBackgroundColor',
  beforeDraw: (chart, args, options) => {
    const {ctx} = chart;
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle ='#ebf3f9';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  }
};
export const options = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: true,
    fontColor: "white",
    fontSize: 18,
    position: "top",
  },
  plugins: {
    legend: {
      display: true,
      fontColor: "white",
      fontSize: 18,
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
  scales: {
    // to remove the labels
    x: {
    
      barPercentage: .25, // Adjust the space between bars
      categoryPercentage: .25,
      ticks: {
        display: true,
        color: '#22223b',
      },

      // to remove the x-axis grid
      grid: {
        drawBorder: false,
        borderColor: "#a3cef1",
        display: false,
        color: "#a3cef1",
      },
    },
    // to remove the y-axis labels
    y: {
      ticks: {
        display: true,
        beginAtZero: true,
        color: '#22223b',
      },
      // to remove the y-axis grid
      grid: {
        borderColor: "#a3cef1",
        drawBorder: false,
        display: true,
        color: "#a3cef1",
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
      color:"white",
      data: labels.map(() => Math.random()),
      backgroundColor: "#a3cef1",
      barThickness:15,
      barPercentage: .25, // Adjust the space between bars
      categoryPercentage: .25,
    },
    {
      color: 'white',
      label: "Dataset 1",
      data: labels.map(() => Math.random()),
      backgroundColor: "#3d5a80",
      barThickness:15,
      barPercentage: .25, // Adjust the space between bars
      categoryPercentage: .25,
    },
  ],
};

export function VerticalSecondBar() {
  return <Bar options={options} data={data} plugins={[plugin]} />;
}
