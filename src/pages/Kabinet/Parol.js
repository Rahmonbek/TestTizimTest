import React, { Component } from "react";
import "./css/parol.css";
// import Logo from "./foto/book3.jpg";
import { Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button } from "react-bootstrap";

export default class Parol extends Component {
  render() {
    return (
      <div>
        <div className="asosiy">
          <div className="sentir">
            <div className="kod">
              <div>
                <Space direction="vertical">
                  <p className="yoz">Yangi parolni kiriting</p>
                  <Input.Password
                    placeholder="input password"
                    className="tet"
                  />

                  <p className="yoz">Yangi parolni qayta kiriting</p>
                  <Input.Password
                    placeholder="input password"
                    className="tet"
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Space>
              </div>
              <br />
              <br />
              <Button className="kin" variant="none">
                parolni o`zgartirish
              </Button>
            </div>

            {/* <img src={Logo} alt="a" className="logo" /> */}
          </div>
        </div>
      </div>
    );
  }
}
