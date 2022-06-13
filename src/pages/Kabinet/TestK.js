// import { Button } from "bootstrap";
import React, { Component } from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./css/test.css";
// import Logo from "./foto/book3.jpg";
// import { Input, Space } from "antd";
// import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button } from "react-bootstrap";

export default class TestK extends Component {
  render() {
    return (
      <div>
        <div className="tashqarit">
          <div className="tashqaritest">
            <div>
              <div>
                <h1 className="yozuvt">Omad tilaymiz!!!</h1>
              </div>

              <div className="drop">
                <div className="med">
                  <Container>
                    <Row>
                      <Col>
                        <div className="toggl">
                          <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                              Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Action
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Another action
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Something else
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </Col>
                      <Col>
                        <div className="toggl">
                          <Dropdown>
                            <Dropdown.Toggle id="dropdown-basic">
                              Dropdown Button
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <Dropdown.Item href="#/action-1">
                                Action
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-2">
                                Another action
                              </Dropdown.Item>
                              <Dropdown.Item href="#/action-3">
                                Something else
                              </Dropdown.Item>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <Container>
                  <Row>
                    <Col> </Col>
                    <Col>
                      <Link to="/kabinet/testishlash">
                        <Button variant="primary" className="kin1">
                          Testni ishlash
                        </Button>{" "}
                      </Link>
                    </Col>
                    <Col></Col>
                  </Row>
                </Container>
              </div>
            </div>
            {/* <img src={Logo} alt="a" className="logo" /> */}
          </div>
        </div>
      </div>
    );
  }
}
