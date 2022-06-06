import React, { Component } from "react";
import { Button } from "react-bootstrap";

import "./css/olimpiada.css";

export default class Olimpiada extends Component {
  render() {
    return (
      <div className='oli'>
        <div className="olimp">
          <div className="olimpich">
            <div class="container">
              <div class="card">
                <div class="box">
                  <div class="content">
                    <h3>Card One</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore, totam velit? Iure nemo labore inventore?
                    </p>
                    <Button variant="secondary">Secondary</Button>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="box">
                  <div class="content">
                    <h3>Card One</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore, totam velit? Iure nemo labore inventore?
                    </p>
                    <Button variant="secondary">Secondary</Button>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="box">
                  <div class="content">
                    <h3>Card Two</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore, totam velit? Iure nemo labore inventore?
                    </p>
                    <Button variant="secondary">Secondary</Button>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="box">
                  <div class="content">
                    <h3>Card Three</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore, totam velit? Iure nemo labore inventore?
                    </p>
                    <Button variant="secondary">Secondary</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
