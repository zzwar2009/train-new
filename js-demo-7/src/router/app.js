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

import BasicExample from '../page/basicexample';
import ParamsExample from '../page/ParamsExample';
import AuthExample from '../page/AuthExample';
import MatchExample from '../page/MatchExample';
import SideBar from '../page/SideBar';

import AmbiguousMatch from '../page/AmbiguousMatch';

import RouteConfig from '../page/RouteConfig';

import ModalGallery from '../page/ModalGallery';

import QueryParams from '../page/QueryParams';
import PropTypes from 'prop-types'



ReactDOM.render(
    <Provider store={configureStore()}>
        <BasicExample/>
    </Provider>,
    document.getElementById('root')
);