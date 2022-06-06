import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Test from "./Test";
import Parol from "./Parol";
import Natija from "./Natija";
import Navbarr from "./Navbarr";
import Olimpiada from "./Olimpiada";
import Testishlash from "./testishlash";
export default class Dasboard extends Component {
  render() {
    return (
      <div>
        <Navbarr />
        {/* <NavbarOne /> */}
        <Routes>
          <Route path="" element={<Test />} />
          <Route path="olimpiada" element={<Olimpiada />} />
          <Route path="natija" element={<Natija />} />
          <Route path="parol" element={<Parol />} />

          <Route path="testishlash" element={<Testishlash />}  />

        </Routes>
      </div>
    );
  }
}
