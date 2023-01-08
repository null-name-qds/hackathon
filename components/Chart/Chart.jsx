import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Average Housing Prices in Vancouver",
    },
  },
};

export const houseTypeOptions = {
    responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Average Types of Housing in Vancouver",
    },
  },
}

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const houseTypes = ["House", "Condo", "Duplex"];

export const data = {
  labels,
  datasets: [
    {
      label: "Average Housing Prices in Vancouver",
      data: labels.map(() => faker.datatype.number({ min: -0, max: 100 })),
      borderColor: "#7E6DE7",
      backgroundColor: "#AEB9FF",
    },
  ],
};


export const typeOfHouseData = {
  labels,
  datasets: [
    {
      label: "House",
      data: labels.map(() => faker.datatype.number({ min: -0, max: 100 })),
      backgroundColor: "#AEB9FF",
    },
    {
      label: "Condo",
      data: labels.map(() => faker.datatype.number({ min: -0, max: 100 })),
      backgroundColor: "#7E6DE7",
    },
    {
      label: "Duplex",
      data: labels.map(() => faker.datatype.number({ min: -0, max: 100 })),
      backgroundColor: "#D7DCFF",
    },
  ],
};

export default function Chart() {
  return (
    <>
      <div className="flex flex-row gap-10 max-w-[470px]">
        <Line
          options={options}
          data={data}
          redraw={true}
          className="h-auto max-w-[470px]"
        />
        <Bar options={houseTypeOptions} data={typeOfHouseData} redraw={true} />
      </div>
    </>
  );
}
