var Number = parseInt(prompt());
var arr = [];
for(var i = 0 ; i < Number; i++){
    var data = parseInt(prompt());
    arr.push(data);
}
var addedData = 0;
for (var i = 0; i < arr.length; i++){
     addedData =  addedData + arr[i];
}
console.log('Total is: ',addedData)