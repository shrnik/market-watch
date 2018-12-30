import React from "react";
import "./marketDepth.css";

export const MarketDepth = () => {
  return (
    <div className="market-depth">
      {/**/}{" "}
      <div className="row depth-table">
        <table className="columns buy">
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
              <td className="text-right quantity">0</td>
            </tr>
            <tr>
              <td className="rate">0.00</td> <td className="orders">0</td>{" "}
              <td className="text-right quantity">0</td>
            </tr>
            <tr>
              <td className="rate">0.00</td> <td className="orders">0</td>{" "}
              <td className="text-right quantity">0</td>
            </tr>
            <tr>
              <td className="rate">0.00</td> <td className="orders">0</td>{" "}
              <td className="text-right quantity">0</td>
            </tr>
            <tr>
              <td className="rate">0.00</td> <td className="orders">0</td>{" "}
              <td className="text-right quantity">0</td>
            </tr>
          </tbody>{" "}
          <tfoot>
            <tr>
              <td>Total</td>{" "}
              <td colSpan={2} className="text-right">
                0
              </td>{" "}
            </tr>
          </tfoot>
        </table>
        <table className="columns sell">
          <thead>
            <tr>
              <th className="order-price">
                {/**/} <span>Offer</span>
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
                    "linear-gradient(to left, rgba(255, 87, 34, 0.1) 5%, transparent 5%)"
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
                    "linear-gradient(to left, rgba(255, 87, 34, 0.1) 5%, transparent 5%)"
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
                    "linear-gradient(to left, rgba(255, 87, 34, 0.1) 5%, transparent 5%)"
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
                    "linear-gradient(to left, rgba(255, 87, 34, 0.1) 5%, transparent 5%)"
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
                    "linear-gradient(to left, rgba(255, 87, 34, 0.1) 5%, transparent 5%)"
                }}
              >
                0
              </td>
            </tr>
          </tbody>{" "}
          <tfoot>
            <tr>
              <td>Total</td> {/**/}{" "}
              <td colSpan={2} className="text-right">
                0
              </td>
            </tr>
          </tfoot>
        </table>
      </div>{" "}
      <div className="priceTable">
        <div className="row">
          <div className="columns">
            <label>Open</label> <span className="value">12350.00</span>
          </div>{" "}
          <div className="columns">
            <label>High</label> <span className="value">13700.00</span>
          </div>
        </div>{" "}
        <div className="row">
          <div className="columns">
            <label>Low</label> <span className="value">12350.00</span>
          </div>{" "}
          <div className="columns">
            <label>Close</label> <span className="value">13700.00</span>
          </div>
        </div>{" "}
        <div className="row">
          <div className="columns">
            <label>Volume</label> <span className="value">NA</span>
          </div>{" "}
          <div className="columns">
            <label>Avg. price</label> <span className="value">NA</span>
          </div>
        </div>{" "}
        <div className="row">
          <div className="columns">
            <label>LTQ</label> <span className="value">1</span>
          </div>{" "}
          <div className="columns">
            <label>LTT</label> <span className="value">NA</span>
          </div>
        </div>{" "}
        {/**/}
      </div>
    </div>
  );
};
