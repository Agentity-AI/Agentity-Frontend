import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register the pieces of Chart.js we need
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const data = {
  labels,
  datasets: [
    {
      label: "Verification",
      data: [10, 20, 30, 40, 50, 60],       // numbers for line 1
      borderColor: "#6366F1",
      backgroundColor: "rgba(99, 102, 241, 0.3)",
      tension: 0.4,                          // smooth curve
      fill: false,
      pointRadius: 4,
      pointHoverRadius: 6,
    },
    {
      label: "Vulnerabilities",
      data: [0, 2, 1.5, 3.3, 1, 0],        // numbers for line 2
      borderColor: "#F97373",
      backgroundColor: "rgba(249, 115, 115, 0.3)",
      tension: 0.4,
      fill: false,
      pointRadius: 4,
      pointHoverRadius: 6,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
      labels: {
        color: "#e5e7eb",
      },
    },
    tooltip: {
      enabled: true,        // show tooltip on hover (default)
      mode: "index",        // show values for *both* lines at that x value
      intersect: false,     // you don't need to be exactly on the point
      callbacks: {
        // customize the text in the tooltip
        label: (context) => {
          const label = context.dataset.label || "";
          const value = context.parsed.y;
          return `${label}: ${value}`;
        },
      },
    },
  },
  scales: {
    x: {
      ticks: { color: "#9ca3af" },
      grid: { color: "rgba(148, 163, 184, 0.2)" },
    },
    y: {
      ticks: { color: "#9ca3af" },
      grid: { color: "rgba(148, 163, 184, 0.2)" },
    },
  },
};

function TwoLineChart() {
  return <div className="h-full w-full"><Line data={data} options={options}  /></div>;
}

export default TwoLineChart;
