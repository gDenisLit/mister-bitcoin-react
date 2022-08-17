import { Component } from 'react'
import { bitcoinService } from '../services/bitcoin.service'
import { BtcOneDayChart } from '../cmps/charts/BtcOneDayChart'

export class StatisticPage extends Component {

    state = {
        currMarketChartData: null
    }

    componentDidMount() {
        this.loadCurrMarketData()
    }

    loadCurrMarketData = async () => {
        try {
            const currMarketChartData = await bitcoinService.getCurrMarketChart()
            this.setState({ currMarketChartData })
        } catch (err) { console.log('Failed to get price data') }
    }

    render() {
        const chartDatas = this.state.currMarketChartData
        if (!chartDatas) return <div>Loading...</div>

        const main = 'statistic main-layout full'
        const inner = 'statistic__inner'

        return (
            <section className={main}>
                <div className={inner}>
                    <ul className='charts-wrapper clean-list'>
                        {chartDatas.map(c => {
                            return (
                                <li key={c.id}>
                                    <BtcOneDayChart chartData={c} />
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </section>
        )
    }
}
