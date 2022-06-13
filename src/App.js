import React, { Component } from "react";
import "antd/dist/antd.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import Test from "./pages/Kabinet/Test";
import Dashboard from "./pages/Kabinet/Dasboardk";
import Logink from "./pages/Kabinet/Logink";
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Navigate to="/login" />} />
            <Route path="kabinet/*" element={<Dashboard />} />
            <Route path="login" element={<Logink />} />

            {/* <Route path="kabinet">
              <Route path="" element={<Test />} />
              <Route path="olimpiada" />
              <Route path="natija" />
              <Route path="parol" />
            </Route> */}
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
