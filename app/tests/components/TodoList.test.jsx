var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoList = require('TodoList');
var Todo = require('Todo');

describe('TodoList', () => {

    it('Shoud exist', ()=>{
        expect(TodoList).toExist();
    });

    it('Should render one Todo component for each todo item ', ()=>{
       var todos = [
         {
           id: 1,
           text: 'one'
         },{
           id: 2,
           text: 'two'
         },{
           id: 3,
           text: 'three'
         }
       ];
       var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
       var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

       expect( todosComponents.length ).toBe(todos.length);

    });

});
