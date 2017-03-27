
var uuid = require('node-uuid');
var moment = require('moment');
// SearchText reducer
//-------------------
export var searchTextReducer = ( state = '', action ) => {
   switch (action.type) {
     case 'SET_SEARCH_TEXT' :
        return action.searchText;
     default :
        return state;
   };
};


// showCompletedReducer, default false, TOGGLE_SHOW_COMPLETED
export var showCompletedReducer = ( state = false, action) => {
   switch (action.type) {
     case 'TOGGLE_SHOW_COMPLETED' :
       return !state;
    default:
      return state;
   };
};

export var todosReducer = (state = [], action ) => {
  switch ( action.type )  {
    case 'ADD_TODO':
      return [
        ...state,
        {
           id: uuid(),
           text: action.text,
           completed: false,
           createdAt: moment().unix(),
           completedAt: undefined
        }
      ];
    case 'TOGGLE_TODO' :
      return state.map( function( todo ) {
                if ( todo.id === action.id ){
                  var nextCompleted = !todo.completed;
                  // todo.completed = !todo.completed;
                  var nextCompletedAt = todo.completed ? moment().unix() : undefined;
                return {
                  ...todo,
                  completed: nextCompleted,
                  completedAt: nextCompletedAt
                };
              } else {
                  return todo;
                }
              });
    // add case for TOGGLE_TODO completed equal to opposite value & updateCompletedAt
    default :
       return state;
  };
};
