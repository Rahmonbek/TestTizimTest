import React, { Component } from "react";
import "./css/parol.css";
// import Logo from "./foto/book3.jpg";
import { Input, Space } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button } from "react-bootstrap";
import axios from "axios";

export default class Parol extends Component {
  state = {
    pass1: "",
    pass2: "",
  };
  editPassword = () => {
    if (this.state.pass1 === "" || this.state.pass2 === "") {
      return alert("Ma'lumot to'liq kiritilmagan!");
    } else {
      axios
        .post(
          "https://chust-test.abrorjonaxmadov.uz/users/password/change/",
          {
            new_password1: this.state.pass1,
            new_password2: this.state.pass2,
          },
          {
            headers: {
              Authorization: `Token ${window.localStorage.getItem("token")}`,
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          alert("Parol o'zgartirildi");
        })
        .catch((err) => console.log(err.message));
    }
  };
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
                    value={this.state.pass1}
                    onChange={(e) => this.setState({ pass1: e.target.value })}
                  />

                  <p className="yoz">Yangi parolni qayta kiriting</p>
                  <Input.Password
                    placeholder="input password"
                    className="tet"
                    value={this.state.pass2}
                    onChange={(e) => this.setState({ pass2: e.target.value })}
                    iconRender={(visible) =>
                      visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                    }
                  />
                </Space>
              </div>
              <br />
              <br />
              <Button
                className="kin"
                variant="none"
                onClick={() => this.editPassword()}
              >
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
