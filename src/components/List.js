import React, { Component } from "react";
import ListItem from "./ListItem";
import { DropDownItem } from "./DropdownItem";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      market: [
        "Abucoins",
        "BTCAlpha",
        "BTCChina",
        "BTCE",
        "BitBay",
        "BitFlip",
        "BitSquare",
        "BitTrex",
        "BitexBook",
        "Bitfinex",
        "Bitlish",
        "Bitsane",
        "Bitstamp",
        "CCEDK",
        "CCEX",
        "Cexio",
        "CoinDeal",
        "CoinHub",
        "Coinbase",
        "Coincap",
        "Coinfloor",
        "Coinroom",
        "CoinsBank",
        "Coinsbit",
        "Coinsetter",
        "Cryptsy",
        "DSX",
        "Exenium",
        "Exmo",
        "ExtStock",
        "Gatecoin",
        "Gemini",
        "Graviex",
        "Huobi",
        "Incorex",
        "IndependentReserve",
        "Kraken",
        "LakeBTC",
        "Liquid",
        "LiveCoin",
        "LocalBitcoins",
        "Lykke",
        "MonetaGo",
        "Neraex",
        "OKCoin",
        "Ore",
        "P2PB2B",
        "Poloniex",
        "QuadrigaCX",
        "Quoine",
        "Remitano",
        "RightBTC",
        "Simex",
        "SingularityX",
        "StocksExchange",
        "StocksExchangeio",
        "TheRockTrading",
        "TrustDEX",
        "WEX",
        "WavesDEX",
        "Yobit",
        "bitFlyer",
        "itBit"
      ],
      input: "",
      displayData: []
    };
  }

  getInput = e => {
    e.preventDefault();
    this.setState({ input: e.target.value });
  };

  handleDropDownclick = (e, item) => {
    //   e.preventDefault();
    let newDislayData = this.state.displayData;
    if (this.state.displayData.findIndex(i => i === item) === -1) {
      newDislayData.push(item);
      this.setState({ displayData: newDislayData, input: "" });
    } else {
      alert("Already added to the list");
    }
  };

  blurInput = () => {
    this.setState({ input: "" });
  };

  render() {
    return (
      <div className="watch">
        <div className="SearchContainer">
          <div className="search">
            <input placeholder="Search for crypto" onChange={this.getInput} />
          </div>
          <div className="search-result">
            {this.state.input !== "" && (
              <ul className="dropdown">
                <div>
                  {this.state.market
                    .filter(data => {
                      return data
                        .toLowerCase()
                        .includes(this.state.input.toLowerCase());
                    })
                    .map((item, index) => {
                      return (
                        <DropDownItem
                          onClick={this.handleDropDownclick}
                          key={index}
                          item={item}
                        />
                      );
                    })}
                </div>
              </ul>
            )}
          </div>
        </div>

        <ListItem symbol="BTC" tsym="USD" market="OKCoin" />

        {this.state.displayData &&
          this.state.displayData.map((item, index) => {
            return (
              <ListItem market={item} symbol="BTC" tsym="USD" key={index} />
            );
          })}
      </div>
    );
  }
}

export default List;
