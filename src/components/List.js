import React, { Component } from "react";
import ListItem from "./ListItem";
import { DropDownItem } from "./DropdownItem";
import RLDD from "react-list-drag-and-drop/lib/RLDD";

class List extends Component {
  constructor(props) {
    super(props);
    this.itemRenderer = this.itemRenderer.bind(this);
    this.handleRLDDChange = this.handleRLDDChange.bind(this);
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
      displayData: [{ market: "Abucoins", id: 0 }],
      id: 1
    };
  }

  getInput = e => {
    e.preventDefault();
    this.setState({ input: e.target.value });
  };

  handleDropDownclick = (e, item) => {
    //   e.preventDefault();
    let newDislayData = this.state.displayData;
    let newID = this.state.id + 1;
    if (this.state.displayData.findIndex(i => i.market === item) === -1) {
      newDislayData.push({ market: item, id: newID });
      this.setState({ displayData: newDislayData, input: "", id: newID });
    } else {
      alert("Already added to the list");
    }
  };

  handleDelete=(item)=>{
    const index = this.state.displayData.findIndex(i => i.market === item)
    let displayData = this.state.displayData;
    displayData.splice(index,1);
    this.setState({displayData});
  }

  itemRenderer(item, index) {
    return <ListItem market={item.market} onDelete={this.handleDelete}/>;
  }

  handleRLDDChange(reorderedItems) {
    this.setState({ displayData: reorderedItems });
  }

  blurInput = () => {
    this.setState({ input: "" });
  };

  render() {
    const items = this.state.displayData;
    return (
      <div className="watch">
        <div className="SearchContainer">
          <div className="search">
            <span>
              {" "}
              <i class="fa fa-search" aria-hidden="true" />
            </span>
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

        {/* <ListItem symbol="BTC" tsym="USD" market="OKCoin" /> */}
        <RLDD
          items={items}
          itemRenderer={this.itemRenderer}
          onChange={this.handleRLDDChange}
        />

        {/* {this.state.displayData &&
          this.state.displayData.map((item, index) => {
            return (
              <ListItem market={item} symbol="BTC" tsym="USD" key={index} />
            );
          })} */}
      </div>
    );
  }
}

export default List;
