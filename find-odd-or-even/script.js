var num = prompt();
var store = parseInt(num.length);
console.log(store)
for(i=0;i<store;i++){
    var x = num % 10;
    var remain = num - x;
    if( x % 2 ==0){
        console.log('even');
    }
    else{
        console.log('odd');}
        num = remain / 10;
}

// check array

// var arr = [29,13,12,43,9];
// /* var addedData = 0; */
// for (var i = 0; i < arr.length; i++){
//    if (arr[i] % 2 ==0){
//    console.log('Even', arr[i]);
//    }
//    else{
//    console.log('odd',arr[i]);
//    }
// }