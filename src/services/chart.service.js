export const chartService = {
    btcDailyOptions,
    btcOneDayOptions
}

function btcOneDayOptions(title) {
    return {
        responsive: true,
        elements: {
            point: { radius: 0 }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: title,
                font: {
                    size: 18,

                },
                color: '#fff'
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    maxTicksLimit: 8,
                    minRotation: 360,
                    align: 'inner',
                    crossAlign: 'far',
                    color: '#fff',
                    // padding: 5,
                    mirror: false,
                    labelOffset: 20
                },
            },
            y: {
                ticks: {
                    color: '#fff',
                    padding: 10
                },
                grid: {
                    color: 'rgba(104, 236, 248, 0.17)',
                    drawBorder: false,
                }
            },
        },
    }
}

function btcDailyOptions() {
    return {
        responsive: true,
        elements: {
            point: { radius: 0 }
        },
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'BTC/USD Daily 2020/2022',
                font: {
                    size: 28,

                },
                color: '#fff'
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    maxTicksLimit: 12,
                    minRotation: 360,
                    align: 'inner',
                    crossAlign: 'far',
                    color: '#fff',
                    padding: 5,
                    mirror: false,
                    labelOffset: 40
                },
            },
            y: {
                ticks: {
                    stepSize: 5000,
                    color: '#fff',
                    padding: 10
                },
                grid: {
                    color: 'rgba(104, 236, 248, 0.17)',
                    drawBorder: false,
                }
            },
        },
    }
}