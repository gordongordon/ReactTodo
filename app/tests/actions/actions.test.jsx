var expect = require( 'expect');
var actions = require('actions');

describe('Action', ()=>{
   it('should generate search text action', ()=>{
     var action = {
       type: 'SET_SEARCH_TEXT',
       searchText : 'Gordon'
     }

     var res = actions.setSearchText(action.searchText);

    expect( res ).toEqual( action);

   });

   it('should generaate todo action', () => {
     var action = {
       type: 'ADD_TODO',
       text: 'walk up'
     }

     var res = actions.addTodo( action.text );
     expect( res ).toEqual( action );
   });

   it('should generate toggle show completed action', ()=>{
     var action = {
       type: 'TOGGLE_SHOW_COMPLETED',
     }

     var res = actions.toggleShowCompleted();

     expect( res  ).toEqual(action);
   })

   it('should generate toggle todo action', ()=> {
      var action = {
        type: 'TOGGLE_TODO',
        id: 1
      }

      var res = actions.toggleTodo(action.id);

      expect( res ).toEqual( action )
   });
});
