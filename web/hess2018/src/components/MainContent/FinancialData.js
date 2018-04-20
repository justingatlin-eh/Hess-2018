import React from 'react'

const FinancialData = props => {
  return (
    <div>
      <h1>
        Financial and<br />Operating Highlights
      </h1>
      <h3>HESS CORPORATION</h3>
      <h5>Amounts in millions, except per share data</h5>
      <table>
        <thead>
          <tr>
            <th className="medium">Financial — for the year</th>
            <th>2017</th>
            <th>2016</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sales and other operating revenues</td>
            <td>
              <span className="dollar">$</span>5,466
            </td>
            <td>
              <span className="dollar">$</span>4,762
            </td>
          </tr>
          <tr>
            <td>Net income (loss) attributable to Hess Corporation</td>
            <td>
              <span className="dollar">$</span>(4,074)
            </td>
            <td>
              <span className="dollar">$</span>(6,132)
            </td>
          </tr>
          <tr>
            <td>
              Net income (loss) per share diluted{' '}
              <span className="super">(a)</span>
            </td>
            <td>
              <span className="dollar">$</span>(13.12)
            </td>
            <td>
              <span className="dollar">$</span>(19.92)
            </td>
          </tr>
          <tr>
            <td>Common stock dividends per share</td>
            <td>
              <span className="dollar">$</span>1.00
            </td>
            <td>
              <span className="dollar">$</span>1.00
            </td>
          </tr>
          <tr>
            <td>Net cash provided by operating activities</td>
            <td>
              <span className="dollar">$</span>945
            </td>
            <td>
              <span className="dollar">$</span>795
            </td>
          </tr>
          <tr>
            <td>E&amp;P capital and exploratory expenditures</td>
            <td>
              <span className="dollar">$</span>2,047
            </td>
            <td>
              <span className="dollar">$</span>1,871
            </td>
          </tr>
          <tr>
            <td>Midstream capital expenditures</td>
            <td>
              <span className="dollar">$</span>121
            </td>
            <td>
              <span className="dollar">$</span>283
            </td>
          </tr>
          <tr className="last-row">
            <td>Weighted average diluted shares outstanding</td>
            <td>314.1</td>
            <td>309.9</td>
          </tr>
          <tr>
            <th className="medium">Financial — at year end</th>
            <th>2017</th>
            <th>2016</th>
          </tr>

          <tr>
            <td>Total assets</td>
            <td>
              <span className="dollar">$</span>23,112
            </td>
            <td>
              <span className="dollar">$</span>28,621
            </td>
          </tr>
          <tr>
            <td>Cash and cash equivalents</td>
            <td>
              <span className="dollar">$</span>4,847
            </td>
            <td>
              <span className="dollar">$</span>2,732
            </td>
          </tr>
          <tr>
            <td>Total debt</td>
            <td>
              <span className="dollar">$</span>6,977
            </td>
            <td>
              <span className="dollar">$</span>6,806
            </td>
          </tr>
          <tr>
            <td>Total equity</td>
            <td>
              <span className="dollar">$</span>12,354
            </td>
            <td>
              <span className="dollar">$</span>15,591
            </td>
          </tr>
          <tr>
            <td>
              Debt to capitalization ratio <span className="super">(b)</span>
            </td>
            <td>
              36.1<span className="percent">%</span>
            </td>
            <td>
              30.4<span className="percent">%</span>
            </td>
          </tr>
          <tr className="last-row">
            <td>Common stock price</td>
            <td>
              <span className="dollar">$</span>47.47
            </td>
            <td>
              <span className="dollar">$</span>62.29
            </td>
          </tr>
          <tr>
            <th className="medium">Operating — for the year</th>
            <th>2017</th>
            <th>2016</th>
          </tr>
          <tr>
            <td>Net production</td>
            <td />
            <td />
          </tr>
          <tr>
            <td className="indent once">
              Crude oil and natural gas liquids (thousands of barrels per day)
            </td>
            <td />
            <td />
          </tr>
          <tr>
            <td className="indent twice">United States</td>
            <td>153</td>
            <td>165</td>
          </tr>
          <tr>
            <td className="indent twice">International</td>
            <td>66</td>
            <td>70</td>
          </tr>
          <tr className="black">
            <th>Total</th>
            <th>219</th>
            <th>235</th>
          </tr>
          <tr>
            <td>Natural gas (thousands of MCF per day)</td>
            <td />
            <td />
          </tr>
          <tr>
            <td className="indent twice">United States</td>
            <td>211</td>
            <td>258</td>
          </tr>
          <tr>
            <td className="indent twice">International</td>
            <td>309</td>
            <td>265</td>
          </tr>
          <tr className="black">
            <th>Total</th>
            <th>520</th>
            <th>523</th>
          </tr>
          <tr className="bottom-border">
            <td>Barrels of oil equivalent (thousands of barrels per day)</td>
            <td>306</td>
            <td>322</td>
          </tr>
        </tbody>
      </table>
      <div className="footer">
        <h6>
          <span>(a)</span>Calculated as net income (loss) attributable to Hess
          Corporation less preferred stock dividends as applicable, divided by
          weighted average number<br />of diluted shares.
        </h6>
        <h6>
          <span>(b)</span>Total debt as a percentage of the sum of total debt
          and total equity.
        </h6>
      </div>
    </div>
  )
}

export default FinancialData
