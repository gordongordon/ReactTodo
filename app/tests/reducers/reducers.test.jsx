var expect = require( 'expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', ()=>{

   describe('searchTextReducer', ()=>{
     it('should set searchText', ()=>{
       var action = {
         type: 'SET_SEARCH_TEXT',
         searchText: 'dog'
       }


       var res = reducers.searchTextReducer( df('') , df(action));

       expect(res).toEqual(action.searchText);
     });
   });

   describe('showCompleted', ()=>{
     it('should toggle showCompleted', ()=> {
       var action = {
       type: 'TOGGLE_SHOW_COMPLETED',
       };

     var res = reducers.showCompletedReducer( df(false), df(action) );

     expect( res ).toEqual(true);
     });
    });

    describe('todosReducer', ()=>{
      it('should add new todo', ()=>{
        var action =  {
            type: 'ADD_TODO',
            text: 'Walk the dog'
          };

        var res = reducers.todosReducer( df([]), df(action));
        expect( res.length ).toEqual(1);
        expect( res[0].text ).toEqual(action.text);
      });
      it('should add exist todos', ()=>{
        var todos = [{
          id: 111,
          text: 'dog',
          showCompleted: false,
          completedAt: undefined,
          createdAt: 33000
        }];
        var action =  {
            type: 'ADD_TODOS',
            todos
          };

        var res = reducers.todosReducer( df([]), df(action));
        expect( res.length ).toEqual(1);
        expect( res[0] ).toEqual(todos[0]);
      });

      it('should toggle todo completed and completedAt', ()=>{
         var todos = [
          {
             id: 1,
             text: 'walk  up',
             completed: false,
             createdAt: 1,
             completedAt: 123
          }
         ];
         var action = {
           type: 'TOGGLE_TODO',
           id: 1
         };
         var res = reducers.todosReducer( df(todos), df(action));
         console.log( res[0] );
         expect( res.length ).toEqual(1);
         expect( res[0].completed ).toEqual(!(todos[0].completed));
         expect( res[0].completedAt ).toEqual(undefined);
      });
      });
});
