import React, { Component } from "react";
import { Route, Routes } from "react-router-dom"; 
import Home from '../screens/home/Home'
import Details from '../screens/home/Details'


class Navigation extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="Detail" element={<Details  />} />
        </Routes>
      </div>
    );
  }
}

export default Navigation;
