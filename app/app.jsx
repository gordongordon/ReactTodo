var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
import router from 'app/router/';

// store.subscribe(() => {
//   var state = store.getState();
//   console.log('New state', state);
//   TodoAPI.setTodos(state.todos);
// });
//
// var initialTodos = TodoAPI.getTodos();
// store.dispatch(actions.addTodos(initialTodos));

import firebase from 'app/firebase/';


firebase.auth().onAuthStateChanged( (user) => {
  if (user) {
    store.dispatch( actions.login(user.uid));
    store.dispatch(actions.startAddTodos());

    hashHistory.push('/todos');
  } else {
    store.dispatch( actions.logout());
    hashHistory.push('/');
  }
});



// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
