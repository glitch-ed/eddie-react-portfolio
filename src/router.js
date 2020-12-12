import React from 'react';
import { IndexRoute, Router, Route, hashHistory} from 'react-router';

import App from './containers/App'
import Home from './containers/home'
import Code from './containers/code'
import Life from './containers/life'
import Contact from './containers/contact'

export default (
    <Router history={hashHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/code' component={Code} />
        <Route path='/life' component={Life} />
        <Route path='/contact' component={Contact} />
      </Route>
    </Router>

);