import React from 'react'
import {connect} from 'react-redux'
import {selectCurrency} from '../actions/selectCurrency'
import {selectBase} from '../actions/selectBase'
import {selectAmount} from '../actions/selectAmount'
import Currency from '../components/Currency'

class SelectConversion extends React.Component {
    state = {
        currencies: [
            {
                "code": "USD",
                "currency": "United States Dollar",
                "icon_url":	"https://cdn4.iconfinder.com/data/icons/currency-symbols-4/128/3-512.png"
            },
            {
              "code": "AED",
              "currency": "United Arab Emirates Dirham",
              "icon_url":	"https://cdn3.iconfinder.com/data/icons/currency-2/460/Arab-Emirates-Dirham-512.png"
              
            },
            {
              "code": "ARS",
              "currency": "Argentine Peso",
              "icon_url":	"https://cdn3.iconfinder.com/data/icons/currency-2/460/Peso-512.png"
            },
            {
              "code": "AUD",
              "currency": "Australian Dollar",
              "icon_url":	"https://cdn4.iconfinder.com/data/icons/currency-symbols-4/128/3-512.png"
            },
            {
              "code": "BGN",
              "currency": "Bulgarian Lev",
              "icon_url":	"https://cdn2.iconfinder.com/data/icons/world-currency/512/13-512.png"
            },
            {
              "code": "BRL",
              "currency": "Brazilian Real",
              "icon_url":	"https://cdn2.iconfinder.com/data/icons/world-currency/512/47-512.png"
            },
            {
              "code": "BSD",
              "currency": "Bahamian Dollar",
              "icon_url":	"https://cdn4.iconfinder.com/data/icons/currency-symbols-4/128/3-512.png"
            },
            {
              "code": "CAD",
              "currency": "Canadian Dollar",
              "icon_url":	"https://cdn3.iconfinder.com/data/icons/currency-2/460/Canadain-Dollar-512.png"
            },
            {
              "code": "CHF",
              "currency": "Swiss Franc",
              "icon_url":	"https://cdn1.iconfinder.com/data/icons/currency-line/48/chf_swiss_franc-512.png"
            },
            {
              "code": "CLP",
              "currency": "Chilean Peso",
              "icon_url":	"https://cdn3.iconfinder.com/data/icons/currency-2/460/Peso-512.png"
            },
            {
              "code": "CNY",
              "currency": "Chinese Yuan",
              "icon_url":	"https://cdn3.iconfinder.com/data/icons/inficons-currency-set/512/cny-512.png"
            },
            {
              "code": "COP",
              "currency": "Colombian Peso",
              "icon_url":	"https://cdn3.iconfinder.com/data/icons/currency-2/460/Peso-512.png"
            },
            {
              "code": "CZK",
              "currency": "Czech Republic Koruna",
              "icon_url":	"https://cdn3.iconfinder.com/data/icons/currency-2/460/Czech-Koruna-512.png"
            },
            {
              "code": "DKK",
              "currency": "Danish Krone",
              "icon_url":	"https://cdn3.iconfinder.com/data/icons/currency-2/460/Krone-512.png"
            },
            {
              "code": "DOP",
              "currency": "Dominican Peso",
              "icon_url":	"https://cdn3.iconfinder.com/data/icons/currency-2/460/Peso-512.png"
            },
            {
              "code": "EGP",
              "currency": "Egyptian Pound",
              "icon_url":	"https://c7.uihere.com/icons/830/781/287/pounds-ec583aef31e3eddb7ec41c9be6d0ff5e.png"
            },
            {
              "code": "EUR",
              "currency": "Euro",
              "icon_url":	"https://image.freepik.com/free-icon/euro-currency-symbol_318-41919.jpg"
            },
            {
              "code": "FJD",
              "currency": "Fijian Dollar",
              "icon_url":	"https://cdn3.iconfinder.com/data/icons/currency-2/460/Fiji-Dollar-512.png"
            },
            {
              "code": "GBP",
              "currency": "British Pound Sterling",
              "icon_url":	"https://cdn4.iconfinder.com/data/icons/currency-symbols-4/128/12-512.png"
            },
            {
              "code": "GTQ",
              "currency": "Guatemalan Quetzal",
              "icon_url":	"https://cdn3.iconfinder.com/data/icons/major-currencies-24px-1/24/quetzal_guatemalan_currency_GTQ-512.png"
            },
            {
              "code": "HKD",
              "currency": "Hong Kong Dollar",
              "icon_url":	"https://i.pinimg.com/originals/3f/ea/33/3fea3359bb5f9cd34e5f8600834e7f22.png"
            },
            {
              "code": "HRK",
              "currency": "Croatian Kuna",
              "icon_url":	"https://cdn4.iconfinder.com/data/icons/currency-symbols-4/128/9-512.png"
            },
            {
              "code": "HUF",
              "currency": "Hungarian Forint",
              "icon_url":	"https://cdn2.iconfinder.com/data/icons/world-currency/512/37-512.png"
            },
            {
              "code": "IDR",
              "currency": "Indonesian Rupiah",
              "icon_url":	"https://cdn2.iconfinder.com/data/icons/world-currency/512/24-512.png"
            },
            {
              "code": "ILS",
              "currency": "Israeli New Sheqel",
              "icon_url":	"https://cdn2.iconfinder.com/data/icons/currency-10/16/Currency_ils_israeli_shekel_money_finance_sign-512.png"
            },
            {
              "code": "INR",
              "currency": "Indian Rupee",
              "icon_url":	"https://cdn3.iconfinder.com/data/icons/currency-2/460/Rupee-512.png"
            },
            {
              "code": "ISK",
              "currency": "Icelandic Króna",
              "icon_url":	"https://cdn3.iconfinder.com/data/icons/currency-minima-24px/24/krona_kronor_krone-512.png"
            },
            {
              "code": "JPY",
              "currency": "Japanese Yen",
              "icon_url":	"https://cdn0.iconfinder.com/data/icons/miscellaneous-40/100/yaun_symbol-512.png"
            },
            {
              "code": "KRW",
              "currency": "South Korean Won",
              "icon_url":	"https://cdn3.iconfinder.com/data/icons/currency-2/460/Won-512.png"
            },
            {
              "code": "KZT",
              "currency": "Kazakhstani Tenge",
              "icon_url":	"https://mpng.pngfly.com/20180615/vye/kisspng-kazakhstani-tenge-currency-symbol-iso-4217-kazakhstan-5b236a6c180628.4155824115290476600984.jpg"
            },
            {
              "code": "MXN",
              "currency": "Mexican Peso",
              "icon_url":	"https://cdn3.iconfinder.com/data/icons/currency-2/460/Peso-512.png"
            },
            {
              "code": "MYR",
              "currency": "Malaysian Ringgit",
              "icon_url":	"https://i.pinimg.com/originals/27/6d/2f/276d2f5420e8c709b2ebc74cc0673930.png"
            },
            {
              "code": "NOK",
              "currency": "Norwegian Krone",
              "icon_url":	"https://cdn3.iconfinder.com/data/icons/currency-minima-24px/24/krona_kronor_krone-512.png"
            },
            {
              "code": "NZD",
              "currency": "New Zealand Dollar",
              "icon_url":	"https://cdn4.iconfinder.com/data/icons/currency-symbols-4/128/3-512.png"
            },
            {
              "code": "PAB",
              "currency": "Panamanian Balboa",
              "icon_url":	"https://cdn3.iconfinder.com/data/icons/major-currencies-24px-glyphs/48/balboa_panamanian_finance_PAB-512.png"
            },
            {
              "code": "PEN",
              "currency": "Peruvian Nuevo Sol",
              "icon_url":	"https://image.flaticon.com/icons/png/512/38/38264.png"
            },
            {
              "code": "PHP",
              "currency": "Philippine Peso",
              "icon_url":	"https://image.flaticon.com/icons/png/512/32/32724.png"
            },
            {
              "code": "PKR",
              "currency": "Pakistani Rupee",
              "icon_url":	"https://image.flaticon.com/icons/png/512/38/38240.png"
            },
            {
              "code": "PLN",
              "currency": "Polish Zloty",
              "icon_url":	"https://cdn4.iconfinder.com/data/icons/currency-symbols-4/128/23-512.png"
            },
            {
              "code": "PYG",
              "currency": "Paraguayan Guarani",
              "icon_url":	"https://image.flaticon.com/icons/png/512/32/32688.png"
            },
            {
              "code": "RON",
              "currency": "Romanian Leu",
              "icon_url":	"https://cdn2.iconfinder.com/data/icons/world-currency/512/31-512.png"
            },
            {
              "code": "RUB",
              "currency": "Russian Ruble",
              "icon_url":	"https://cdn0.iconfinder.com/data/icons/business-vector-tab-bar-icons/48/rouble-512.png"
            },
            {
              "code": "SAR",
              "currency": "Saudi Riyal",
              "icon_url":	"https://image.flaticon.com/icons/png/512/32/32980.png"
            },
            {
              "code": "SEK",
              "currency": "Swedish Krona",
              "icon_url":	"https://cdn4.iconfinder.com/data/icons/currency-symbols-4/128/11-512.png"
            },
            {
              "code": "SGD",
              "currency": "Singapore Dollar",
              "icon_url":	"https://cdn3.iconfinder.com/data/icons/currency-2/460/Singapore-Dollar-512.png"
            },
            {
              "code": "THB",
              "currency": "Thai Baht",
              "icon_url":	"https://library.kissclipart.com/20180927/cge/kissclipart-thai-baht-sign-png-clipart-thai-baht-currency-symb-cc49980f4b1c9c56.png"
            },
            {
              "code": "TRY",
              "currency": "Turkish Lira",
              "icon_url":	"https://i.pinimg.com/originals/04/a6/a3/04a6a30591473a68af5ea643e5d2dc5d.png"
            },
            {
              "code": "TWD",
              "currency": "New Taiwan Dollar",
              "icon_url":	"https://cdn3.iconfinder.com/data/icons/currency-15/24/Twd-512.png"
            },
            {
              "code": "UAH",
              "currency": "Ukrainian Hryvnia",
              "icon_url":	"https://camo.githubusercontent.com/ad89d1367673c4db40b159e6b92157b146cb2ab5/68747470733a2f2f696d6167652e666c617469636f6e2e636f6d2f69636f6e732f7376672f36362f36363233302e737667"
            },
            {
              "code": "UYU",
              "currency": "Uruguayan Peso",
              "icon_url":	"https://cdn2.iconfinder.com/data/icons/world-currency/512/50-512.png"
            },
            {
              "code": "VND",
              "currency": "Vietnamese Dong",
              "icon_url":	"https://cdn4.iconfinder.com/data/icons/currency-symbols-4/128/30-512.png"
            },
            {
              "code": "ZAR",
              "currency": "South African Rand",
              "icon_url":	"https://cdn3.iconfinder.com/data/icons/currency-2/460/South-Africa-Rand-512.png"
            },
            {
              "code": "BTC",
              "currency": "Bitcoin",
              "icon_url":	"https://assets.coinlayer.com/icons/BTC.png"
            },
            {
              "code": "ETH",
              "currency": "Ethereum",
              "icon_url":	"https://assets.coinlayer.com/icons/ETH.png"
            },
            {
              "code": "XRP",
              "currency": "XRP",
              "icon_url":	"https://assets.coinlayer.com/icons/XRP.png"
            },
            {
              "code": "BCH",
              "currency": "Bitcoin Cash",
              "icon_url":	"https://assets.coinlayer.com/icons/BCH.png"
            },
            {
              "code": "USDT",
              "currency": "Tether",
              "icon_url":	"https://assets.coinlayer.com/icons/USDT.png"
            },
            {
              "code": "LTC",
              "currency": "Litecoin",
              "icon_url":	"https://assets.coinlayer.com/icons/LTC.png"
            },
            {
              "code": "EOS",
              "currency": "EOS",
              'icon_url':	"https://assets.coinlayer.com/icons/EOS.png"
            },
            {
              "code": "BNB",
              "currency": "Binance Coin",
              "icon_url":"https://assets.coinlayer.com/icons/BNB.png"
            },
            {
              "code": "XLM",
              "currency": "Stellar",
              "icon_url": "https://assets.coinlayer.com/icons/XLM.png"
            }
          ]
    }
    render(){
      console.log(this.props)
      let BimgUrl = this.props.currency.Bicon_url;
      let imgUrl = this.props.currency.icon_url;
      let BdivStyle = {
        backgroundImage: 'url(' + BimgUrl + ')',
        backgroundSize: 'cover',
        height: '300px',
        width: '300px',
        backgroundPosition: "center"
      }
      let divStyle = {
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundSize: 'cover',
        height: '300px',
        width: '300px',
        backgroundPosition: "center"
      }
      let arrowDivStyle = {
        backgroundImage: 'url(https://cdn0.iconfinder.com/data/icons/website-kit-2/512/icon_404-512.png)',
        backgroundSize: 'cover',
        height: '300px',
        width: '300px',
        backgroundPosition: "center"
      }
        return (
            <main role="main" className="inner cover text-center">
                <div className="d-flex flex-row p-2 justify-content-between">

                    <div style={BdivStyle} className="div-bg row d-flex justify-content-center">
                      <div className="d-flex flex-column justify-content-around text-center">
                        <select name="bCurrency" id="bcurrency" className="rounded" onChange={
                            (e) => {
                                const co = e.target.value
                                const cur = this.state.currencies.find((item) => item.code == co)
                                this.props.selectBase(cur.code, cur.currency, cur.icon_url)
                            }
                        }>
                            {this.state.currencies.map((item) => <Currency key={item.currency} {...item}/>)}
                        </select>
                      </div>
                    </div>

                      <div style={arrowDivStyle} className="div-bg row d-flex justify-content-center text-center">
                        <div className="d-flex flex-column justify-content-center row text-center">
                          <input type="number" id="amount" name="amount" defaultValue='1.00' className="rounded" step="0.01" onChange={
                            (e) => {
                                const amount = e.target.value
                                this.props.selectAmount(amount)
                            }
                          }/>
                        </div>
                      </div>

                    

                    <div style={divStyle} className="div-bg row d-flex justify-content-center">
                      <div className="d-flex flex-column justify-content-around text-center">
                        <select name="currency" id="currency" className="rounded" onChange={
                            (e) => {
                                const co = e.target.value
                                const cur = this.state.currencies.find((item) => item.code == co)
                                this.props.selectCurrency(cur.code, cur.currency, cur.icon_url)
                            }
                        }>
                            {this.state.currencies.map((item) => <Currency key={item.currency} {...item}/>)}
                        </select>
                      </div>
                    </div>

                </div>
            </main>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    selectCurrency : (code, currency, icon_url) => dispatch(selectCurrency(code, currency, icon_url)),
    selectAmount : (amount) => dispatch(selectAmount(amount)),
    selectBase : (code, currency, icon_url) => dispatch(selectBase(code, currency, icon_url))
})

const mapStateToProps = (state) => ({
  currency : state.currency
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectConversion)