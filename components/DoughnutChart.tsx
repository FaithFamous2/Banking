"use client"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, plugins} from "chart.js";
import { plugin } from "postcss";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend)


const DoughnutChart = ({accounts} :DoughnutChartProps) => {
    const accountNames  =accounts.map((a) => a.name);
    const balances = accounts.map((a) => a.currentBalance)
    const data ={
        datasets: [
            {
                label: 'Banks',
                data: balances,
                backgroundColor: ['#b67607', '#d89e22', '#faba2f']
            }
        ],
        labels: accountNames
    }
  return <Doughnut
    data={data}
    options={{
        cutout: '60%',
        plugins:{
            legend:{
                display: false
            }
        }
    }}
    />
}

export default DoughnutChart
