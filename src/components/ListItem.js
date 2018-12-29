import React, { Component } from "react";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = { data: {}, show: false, color:"black" };
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
      .then(result => this.setState({ data: result, show: true },()=>{this.getColor()}));
  }

  getColor=()=>{
      if(this.state.show){
        parseFloat( this.state.data.CHANGEPCT24HOUR)>=0?this.setState({color:"green"}):this.setState({color:"red"})
      }
  }
  render() {
    return (
      <div className={"item "+this.state.color}>
        <span className="symbol">{this.props.symbol} </span>
        <span className="market" style={{color:"black"}}>{this.props.market} </span>
        <span className="change" >
          {this.state.show ?"% "+this.state.data.CHANGEPCT24HOUR : ""}{" "}
        </span>
        {/* <span className="tsym">{this.props.tsym} </span> */}
        <span className="price">
          {this.state.show ? this.state.data.PRICE : ""}
        </span>
      </div>
    );
  }
}

export default ListItem;
