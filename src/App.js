import React, { Component } from "react";
import "antd/dist/antd.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
// import Test from "./pages/Kabinet/Test";
import Dasboard from "./pages/Kabinet/Dasboardk";
import Dashboard from "./pages/Client/Dashboard";
import Logink from "./pages/Kabinet/Logink";
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Dashboard/>} />
           
            <Route path="login" element={<Logink />} />

<Route  path="kabinet">
<Route path="" element={<Dasboard id={0} />} />
<Route path="olimpiada" element={<Dasboard id={1} />} />
          <Route path="natija" element={<Dasboard id={2} />} />
          <Route path="parol" element={<Dasboard id={3} />} />
          <Route path="testishlash" element={<Dasboard id={4} />} />
</Route>
          
                      </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
