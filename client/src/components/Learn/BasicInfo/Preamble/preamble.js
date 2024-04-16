import React from 'react';
import './preamble.css';
import Img from "./pre.webp";

const Preamble = () => {
    return (
    <div className="container-pre">
        <div className="UnderImgpre">
      <img src={Img} alt="Preamble" className="preamble-image" />
      </div>
      <div className="UnderTablepre">
        <h3>Words from the Preamble of the Indian Constitution along with their meanings</h3>
      <table className="pre-table">
        <thead>
          <tr>
            <th>Word</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
        <tr>
              <td>Sovereign</td>
              <td>India can make its own decisions and is not controlled by any other country.</td>
            </tr>
            <tr>
              <td>Socialist</td>
              <td>Everyone should have equal opportunities to succeed and have a good life.</td>
            </tr>
            <tr>
              <td>Secular</td>
              <td>People can follow any religion they want, and the government treats all religions equally.</td>
            </tr>
            <tr>
              <td>Democratic</td>
              <td>People have the power to choose their leaders through voting.</td>
            </tr>
            <tr>
              <td>Republic</td>
              <td>The country's leader is chosen by the people, not by birth.</td>
            </tr>
            <tr>
              <td>Justice</td>
              <td>Treating everyone fairly and equally under the law.</td>
            </tr>
            <tr>
              <td>Liberty</td>
              <td>People have the freedom to think, speak, and believe what they want.</td>
            </tr>
            <tr>
              <td>Equality</td>
              <td>Everyone should have the same chances and opportunities in life.</td>
            </tr>
            <tr>
              <td>Fraternity</td>
              <td>People should treat each other like family and work together to make the country strong and united.</td>
            </tr>
        </tbody>
      </table>
      </div>
      <div className="Underbtn2">
      <button onClick={() => window.history.back()}>Back</button>
    </div>
    </div>
  );
};

export default Preamble;
