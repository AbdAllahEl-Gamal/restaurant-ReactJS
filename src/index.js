import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from './App';
import Menu from './components/Menu/Menu';
import About from './components/About/About';
import NotFound from './components/NotFound'
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router>
    <div>
		<Switch>
		  <Route exact path="/" component={App} />
		  <Route path="/about" component={About} />
		  <Route path="/menu" component={Menu} />
		  <Route component={NotFound} />
		</Switch>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();