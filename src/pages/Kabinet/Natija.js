import React, { Component } from "react";
import { ProgressBar } from "react-bootstrap";

import "./css/natija.css";

export default class Natija extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <div className="natija">
              <h2>Umumiy foiz</h2>
              <h4>390%</h4>
              <div className="foizdiv">
                <ProgressBar animated now={45} className="foiz" />
              </div>
            </div>
          </div>
          <div>
            <div className="natija">
              <h2>Umumiy foiz</h2>
              <h4>390%</h4>
              <div className="foizdiv">
                <ProgressBar animated now={45} className="foiz" />
              </div>
            </div>
          </div>
          <div>
            <div className="natija">
              <h2>Umumiy foiz</h2>
              <h4>390%</h4>
              <div className="foizdiv">
                <ProgressBar animated now={45} className="foiz" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
