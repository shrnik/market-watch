import React, { Component } from "react";
import { MarketDepth } from "./marketDepth";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {}, show: false, color: "black", showDropDown: false };
  }

  componentDidMount() {
    this.getItems();
    setInterval(() => this.getItems(), 5000);
  }

  getItems() {
    fetch(
      `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD&e=${
        this.props.market
      }&api_key=9370d779da8126346babaf896568e241e323c01a49899ba9f794898ca3d7933c`
    )
      .then(result => result.json())
      .then(result => result.DISPLAY.BTC.USD)
      .then(result =>
        this.setState({ data: result, show: true }, () => {
          this.getColor();
        })
      );
  }

  getColor = () => {
    if (this.state.show) {
      parseFloat(this.state.data.CHANGEPCT24HOUR) >= 0
        ? this.setState({ color: "green" })
        : this.setState({ color: "red" });
    }
  };

  toggleDropDown = () => {
    let newState = !this.state.showDropDown;
    this.setState({ showDropDown: newState });
  };



  render() {
    return (
      <React.Fragment>
        <div className={"item " + this.state.color}>
          <span className="symbol">BTC </span>
          <span className="market" style={{ color: "black" }}>
            {this.props.market}{" "}
          </span>
          <span className="change">
            {this.state.show ? (
              <div>
                {"% " + this.state.data.CHANGEPCT24HOUR}{" "}
                {this.state.color === "green"?<i class="fa fa-angle-up" />:<i class="fa fa-angle-down" />}
                
              </div>
            ) : (
              ""
            )}
          </span>
          {/* <span className="tsym">{this.props.tsym} </span> */}
          <span className="price">
            {this.state.show ? this.state.data.PRICE : ""}
          </span>
          <button onClick={this.toggleDropDown}>
            <i class="fa fa-bars" />
          </button>
          <button onClick={()=>this.props.onDelete(this.props.market)}>
            <i class="fa fa-trash" />
          </button>
        </div>

        {this.state.showDropDown && <MarketDepth />}
      </React.Fragment>
    );
  }
}

export default ListItem;
