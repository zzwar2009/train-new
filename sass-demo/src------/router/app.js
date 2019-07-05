import "@babel/polyfill";
var ReactDOM = require("react-dom");
import React, { Component } from 'react';

import  {Provider} from 'react-redux';

// import  {Provider} from 'react-redux';
// const Provider = Context.Provider;
import configureStore from '../store/configureStore.js';
import { BrowserRouter,Switch,Route,HashRouter,Link } from 'react-router-dom'
import Frame from '../page/frame/index.js';
import "../styles/app.scss";
import Home from '../page/home';
import PropTypes from 'prop-types'
import News from '../page/news';
import Article from '../page/article';

const Main = () => (
    <main>
      <Switch>
        
        <Route exact path="/article(/id/:id)(/title/:title)(/token/:token)" component={Article}/>
        <Route exact path="/news/id/:id/title/:title/token/:token" component={News}/>
        <Route exact path='/' component={Home}/>
      </Switch>
    </main>
  )
  // The Header creates links that can be used to navigate
// between routes.
const Header = () => (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/roster'>Roster</Link></li>
          <li><Link to='/schedule'>Schedule</Link></li>
        </ul>
      </nav>
    </header>
  )
const App = () => (
    <div>
      <Header />
      <Main />
    </div>
  )
  
ReactDOM.render(
    <Provider store={configureStore()}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);