// find array num index position
/* example :var a = [2,4,5,3,21]; */

// create array
var a = [];
var numRange = parseInt(prompt('How many Numbers you Want?'));
for (i = 0; i < numRange; i++){
  var number = parseInt(prompt('Enter the Array Elements'));
  a.push(number);
}
console.log(a);

//find position
var store = parseInt(prompt('What Number Position you Want:'));
for ( i = 0; i < a.length;i++){
if ( store == a[i]){
 var currentData = a.indexOf(a[i]);
}
}
console.log('Your Number Position is: ' ,currentData);
