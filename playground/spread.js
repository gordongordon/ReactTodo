// function add ( a , b ) {
//   return a + b;
// }
//
// console.log( add( 3, 1));
//
// var toAdd = [ 9, 5];
//
// console.log( add(...toAdd ) );

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [3, ...groupA, ];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
// hi Andrew, you are 25

var names = ['Mike', 'Ben'];
var final = ['Gordon', ...names];

function greeting( name, age ) {
  console.log( 'hi '+ name + 'you are ' + age );
}

greeting( ...person );
greeting( ...personTwo );

final.forEach( function( name ) {
  console.log( 'hi , ' + name);
});
