import React, { Component } from 'react';
import {Switch,Route, BrowserRouter} from 'react-router-dom';
import logo from '../components/bigissue.png';
import Button from '../components/button';
const HomePage = () => (
    <BrowserRouter>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="logo"/>
            </header>
            <Button/>
    </div>
  </BrowserRouter>
  );

  export default HomePage;