import "@babel/polyfill";
var ReactDOM = require("react-dom");
import React, { Component } from 'react';
import  {Provider} from 'react-redux';
import configureStore from '../store/configureStore.js';
import { BrowserRouter,Switch,Route,HashRouter,Link } from 'react-router-dom'
import Frame from '../page/frame/index.js';
import "../styles/app.scss";
import Counter from '../page/counter/index17';
import Weather from '../page/weather';
import PropTypes from 'prop-types'


ReactDOM.render(
    <Counter/>,
    document.getElementById('root')
);