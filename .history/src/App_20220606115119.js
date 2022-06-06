import React, { Component } from 'react'
import 'antd/dist/antd.css';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Test from './pages/Kabinet/Test';
import Dashboard from './pages/Client/Dashboard';
export default class App extends Component {
  render() {
    return (
      <div>

        <BrowserRouter>
<Routes>
<Route path="/" element={<Dashboard/>}/>

  <Route path="/kabinet">
<Route path="/" element={<Test/>}/>
<Route path="/olimpiada"/>
<Route path="natija"/>
<Route path="parol"/>
  </Route>
</Routes>
        </BrowserRouter>
      </div>
    )
  }
}
