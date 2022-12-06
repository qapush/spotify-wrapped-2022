import {
    Chart as ChartJS,
    ArcElement,
    Colors,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Pie } from "react-chartjs-2";

  export default function PieChart({top10}){
    ChartJS.register(ArcElement, Tooltip, Legend, Colors);

    const chartDataLabels = top10.map((item) => item.artistName);
    const chartData = top10.map((item) => item.songs.length);

    return(
        <div className="chart">
        <Pie
          data={{
            labels: [...chartDataLabels],
            datasets: [
              {
                label: "# of songs",
                data: [...chartData],
              },
            ],
          }}
          options={{
            aspectRatio: 1,
            plugins: {
              legend: {
                position: "bottom",
                maxWidth: 99999,
                maxHeight: 99999,
              },
            },
          }}
        />
      </div>
    )
  }