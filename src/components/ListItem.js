import React, { Component } from "react";

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
            {this.state.show ? "% " + this.state.data.CHANGEPCT24HOUR : ""}{" "}
          </span>
          {/* <span className="tsym">{this.props.tsym} </span> */}
          <span className="price">
            {this.state.show ? this.state.data.PRICE : ""}
          </span>
          <button onClick={this.toggleDropDown} />
        </div>


        
        {this.state.showDropDown && 
        <div className="row depth-table">
          <table className="six columns buy">
            <thead>
              <tr>
                <th className="order-price">
                  <span>Bid</span> {/**/}
                </th>{" "}
                <th className="orders">Orders</th>{" "}
                <th className="text-right quantity">Qty.</th>
              </tr>
            </thead>{" "}
            <tbody>
              <tr>
                <td className="rate">0.00</td> <td className="orders">0</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(65, 132, 243, 0.1) 5%, transparent 5%)"
                  }}
                >
                  0
                </td>
              </tr>
              <tr>
                <td className="rate">0.00</td> <td className="orders">0</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(65, 132, 243, 0.1) 5%, transparent 5%)"
                  }}
                >
                  0
                </td>
              </tr>
              <tr>
                <td className="rate">0.00</td> <td className="orders">0</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(65, 132, 243, 0.1) 5%, transparent 5%)"
                  }}
                >
                  0
                </td>
              </tr>
              <tr>
                <td className="rate">0.00</td> <td className="orders">0</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(65, 132, 243, 0.1) 5%, transparent 5%)"
                  }}
                >
                  0
                </td>
              </tr>
              <tr>
                <td className="rate">0.00</td> <td className="orders">0</td>{" "}
                <td
                  className="text-right quantity"
                  style={{
                    background:
                      "linear-gradient(to left, rgba(65, 132, 243, 0.1) 5%, transparent 5%)"
                  }}
                >
                  0
                </td>
              </tr>
            </tbody>{" "}
            <tfoot>
              <tr>
                <td>Total</td>{" "}
                <td colSpan={2} className="text-right">
                  0
                </td>{" "}
                {/**/}
              </tr>
            </tfoot>
          </table>
          </div>}
      </React.Fragment>
    );
  }
}

export default ListItem;
