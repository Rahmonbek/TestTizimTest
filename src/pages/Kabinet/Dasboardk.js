import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import TestK from "./TestK";
import Parol from "./Parol";
import Natija from "./Natija";
import Navbarr from "./Navbarr";
import Olimpiada from "./Olimpiada";
import Testishlash from "./testishlash";

export default class Dasboard extends Component {
  render() {
console.log(this.props)
    return (
      <div>
        <Navbarr />
       
         
          {this.props.id===0?<TestK />:''}
          {this.props.id===1?<Olimpiada />:''}
          {this.props.id===2?<Natija />:''}
          {this.props.id===3?<Parol />:''}
        {this.props.id===4?<Testishlash />:''}
         
  
      </div>
    );
  }
}
