var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// load foundation
$(document).foundation();

// App css Scss loader
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>React boilerplate 3</p>,
  document.getElementById('app')
);
