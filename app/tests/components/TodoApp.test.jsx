var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });
  it('should add todo to the todos state on handleAddTodo', ()=>
  {
     var todoText = 'test todo';
     var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

     todoApp.setState({todos: []});
     todoApp.handleAddTodo( todoText );

     expect(todoApp.state.todos[0].text).toBe(todoText);
     // Expect createdAt to be a number
     expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });   
  it('should toggle completed value when handleToggle called',()=>{
    var todoData = {
        id: 11,
        text: 'Test feature',
        completed: false,
        createdAt: 0,
        completedAt: undefined
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState( {
       todos: [todoData]
    });

    expect(todoApp.state.todos[0].completed).toBe(false);
    // check that todo first itme has completed value of false/
    todoApp.handleToggle( 11 );
    // call handleToggle with 11
    expect(todoApp.state.todos[0].completed).toBe(true);
    // Verify that value changed
    // Expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toBeA('number');
  });

  it('should toggle from true to false, completedAt get remove,',()=>{
    var todoData = {
        id: 11,
        text: 'Test feature',
        completed: true,
        createdAt: 1,
        completedAt: 2
    };

    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState( {
       todos: [todoData]
    });

    expect(todoApp.state.todos[0].completed).toBe(true);
    // check that todo first itme has completed value of false/
    todoApp.handleToggle( 11 );
    // call handleToggle with 11
    expect(todoApp.state.todos[0].completed).toBe(false);
    // Verify that value changed
    // Expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toNotExist();
  });

});
