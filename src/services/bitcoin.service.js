import axios from 'axios'
import { chartService } from './chart.service'
import { utilService } from './util.service'

export const bitcoinService = {
    getHistData,
    getCurrMarketData,
    getCurrMarketChart,
}

const BASE_URL = 'https://api.coingecko.com/api/v3/coins/bitcoin/'
const BTC_OHLC = 'BTC_OHLC_DAILY'
const BTC_PRICE = 'BTC_CURR_PRICE'
const BTC_24H = 'BTC_24H_MARKET_DATA'

async function getCurrMarketData() {
    const data = await _currPriceData()
    const market = data.market_data
    return _getPriceData(market)
}

async function getHistData() {
    const data = await _histData()
    const prices = data.prices.map(p => p[1])
    const labels = data.prices.map(p => {
        const date = new Date(p[0])
        const year = date.getFullYear() - 2000
        const options = { month: 'short' }
        const month = new Intl.DateTimeFormat('en-US', options).format(date)
        return `${month}/${year}`
    })
    const datasets = [{
        data: prices,
        borderColor: ['#fff'],
        borderWidth: 1,
        lineTension: 0,
    }]
    const options = chartService.btcDailyOptions()
    return { data: { labels, datasets, }, options }
}

async function getCurrMarketChart() {
    const data = await _getCurrData()
    const marketCaps = _getDataSet(data.market_caps, '1D Market Cap')
    const prices = _getDataSet(data.prices, '1D Price')
    const volumes = _getDataSet(data.total_volumes, '1D Volume')
    return [marketCaps, prices, volumes]
}

function _getDataSet(dataPoint, title) {
    const labels = dataPoint.map(p => {
        const date = new Date(p[0])
        const options = { hour: 'numeric', minute: 'numeric', timeZone: 'Israel' }
        const time = new Intl.DateTimeFormat('he-IL', options).format(date)
        return time
    })
    const val = dataPoint.map(p => p[1])
    const datasets = [{
        data: val,
        borderColor: ['#fff'],
        borderWidth: 1,
        lineTension: 0,
    }]
    const options = chartService.btcOneDayOptions(title)
    return {
        id: utilService.makeId(),
        data: { labels, datasets },
        options
    }
}

async function _currPriceData() {
    var data = JSON.parse(sessionStorage.getItem(BTC_PRICE))
    if (!data) {
        try {
            const res = await axios.get(BASE_URL)
            data = res.data
        } catch (err) { console.dir(err) }
    }
    sessionStorage.setItem(BTC_PRICE, JSON.stringify(data))
    return data
}

async function _histData() {
    var data = JSON.parse(sessionStorage.getItem(BTC_OHLC))
    if (!data) {
        try {
            const queryStr = 'market_chart?vs_currency=USD&days=700&interval=daily'
            const res = await axios.get(BASE_URL + queryStr)
            data = res.data
            sessionStorage.setItem(BTC_OHLC, JSON.stringify(data))
        } catch (err) { console.dirr(err) }
    }
    return data
}

async function _getCurrData() {
    var data = JSON.parse(sessionStorage.getItem(BTC_24H))
    if (!data) {
        try {
            const queryStr = 'market_chart/range?vs_currency=usd&from=1660622711&to=1660709111'
            const res = await axios.get(BASE_URL + queryStr)
            data = res.data
            sessionStorage.setItem(BTC_24H, JSON.stringify(data))
        } catch (err) { console.dirr(err) }
    }
    return data
}

function _getPriceData(market) {
    const priceData = [
        { title: 'Price', val: market.current_price.usd, },
        { title: 'Price Change', val: market.price_change_24h },
        { title: '24H High', val: market.high_24h.usd, },
        { title: '24H Low', val: market.low_24h.usd, },
        // { title: 'Market Cap', val: market.market_cap.usd, },
        // { title: 'All Time High', val: market.ath.usd,},
        // { title: 'All Time Low', val: market.atl.usd, },
    ]
    priceData.forEach(p => p.id = utilService.makeId())
    return priceData
}


