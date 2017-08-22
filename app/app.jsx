var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About} />
      <Route path="examples" component={Examples} />
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById('app')
);

/*
 * Presentational Components take props and render them to the screen
 *  - GreeterMessage
 *  - GreeterForm
 * STATE can be changed; PROPS cannot
 * Container Components should really only render children
 * */
