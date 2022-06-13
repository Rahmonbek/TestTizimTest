import axios from "axios";
import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import logink from "./css/logink.module.css";
import "./css/loginyordamchi.css";
const api = "https://chust-test.abrorjonaxmadov.uz";

export default class Logink extends Component {
  state = {
    username: "",
    password: "",
    login: false,
  };
  login = () => {
    axios
      .post(`${api}/users/login/`, {
        username: this.state.username,
        password: this.state.password,
      })
      .then((res) => {
        window.localStorage.setItem("token", res.data.key);
        this.setState({ login: true });
      })
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <>
        {this.state.login !== true ? (
          <div className={logink.container}>
            <div className={logink.screen}>
              <div className={logink.screen__content}>
                <form className={logink.login}>
                  <div className={logink.login__field}>
                    <i className="login__icon fas fa-user"></i>
                    <input
                      type="text"
                      className={logink.login__input}
                      placeholder="Username"
                      value={this.state.username}
                      onChange={(e) =>
                        this.setState({ username: e.target.value })
                      }
                    />
                  </div>
                  <div className={logink.login__field}>
                    <i className="login__icon fas fa-lock"></i>
                    <input
                      type="password"
                      className={logink.login__input}
                      placeholder="Password"
                      value={this.state.password}
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  </div>
                  <button
                    className="button login__submit"
                    type="button"
                    onClick={() => this.login()}
                  >
                    <span className="button__text">TIZIMGA KIRISH</span>
                    <i className="button__icon fas fa-chevron-right"></i>
                  </button>
                </form>
              </div>
              <div className="screen__background">
                <span className="screen__background__shape screen__background__shape4"></span>
                <span className="screen__background__shape screen__background__shape3"></span>
                <span className="screen__background__shape screen__background__shape2"></span>
                <span className="screen__background__shape screen__background__shape1"></span>
              </div>
            </div>
          </div>
        ) : (
          <Navigate to="../kabinet" />
        )}
      </>
    );
  }
}
