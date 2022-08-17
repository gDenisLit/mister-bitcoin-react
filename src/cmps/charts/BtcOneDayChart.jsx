import React from 'react'
import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

export function BtcOneDayChart({ chartData }) {
    const { data } = chartData
    const { options } = chartData

    return (
        <div className='chart-container small'>
            <Line options={options} data={data} />
        </div>
    )
}


