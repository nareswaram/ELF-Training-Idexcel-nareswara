function getUnique(arr){
    var uniqueArray = []
    for(i=0;i<arr.length;i++){
        if(uniqueArray.indexOf(arr[i])===-1){
            uniqueArray.push(arr[i])
        }
    }return uniqueArray
}
var names=['rama','hari','janu']
var uniqueNames = getUnique(names)
console.log(uniqueNames);
