import { Component } from 'react'
import { BtcDailyChart } from '../cmps/charts/BtcDailyChart'
import { CardList } from "../cmps/home/CardList"
import { UserBalance } from '../cmps/home/UserBalance'
import { bitcoinService } from '../services/bitcoin.service'
import { userService } from '../services/user.service'

export class HomePage extends Component {

    state = {
        btcCurrPrice: null,
        btcChartData: null,
        loggedInUser: null,
    }

    componentDidMount() {
        this.getCurrPrice()
        this.getChartData()
        this.loadUser()
    }

    loadUser() {
        const loggedInUser = userService.getLoggedinUser()
        if (loggedInUser) this.setState({ loggedInUser })
    }

    getCurrPrice = async () => {
        try {
            const btcCurrPrice = await bitcoinService.getCurrMarketData()
            this.setState({ btcCurrPrice })
        } catch (err) { console.log('Failed to get price data') }
    }

    getChartData = async () => {
        try {
            const btcChartData = await bitcoinService.getHistData()
            this.setState({ btcChartData })
        } catch (err) { console.log('Failed to get chart data') }
    }

    render() {
        const chartData = this.state.btcChartData
        const priceData = this.state.btcCurrPrice
        const { loggedInUser } = this.state
        if (!chartData || !priceData) return <div>Loading...</div>

        const main = 'home main-layout full'
        const inner = 'home__inner'

        return (
            <section className={main}>
                <div className={inner}>
                    <div className='heading'>
                        <h1>Overview</h1>
                        <UserBalance loggedInUser={loggedInUser} />
                    </div>
                    <div className='container'>
                        <BtcDailyChart chartData={chartData} />
                        <CardList priceData={priceData} />
                    </div>
                </div>
            </section>
        )
    }
}