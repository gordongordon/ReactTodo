// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Jen', 'Cory'];
// var groupB = ['Vikram'];
// var final = [...groupB, 3, ...groupA];
//
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];
// Hi Andrew, you are 25

function greet (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}
greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andrew', ...names];
// Hi Andrew

final.forEach(function (name) {
  console.log('Hi ' + name);
});

State {
  currnetState,
  PreState,
  NextState,
}

Answer   = {
    Name: 'Yes',
    Type: true
    node : null
}

Question = {
    Title: 'Do you want to buy a house?',
    yes:  yes
    price: null,
    location: null,
    time: null,
}

leaf {
  Name: 'Yes',
  Type: 'true'
  parant: null,

}

node {
   preNode:
   title:
   next : []
}

node1.next[0] = answerYes,
node1.next[2] = answerPrice,
..




function ( question ) {

   if ( question.yes )
   {
     <.. Yes, or No >
   }

   if ( question.price )
   {
     <.. number >
   }
}
