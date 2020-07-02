
function sum_Of_Cubes(arr){
    var sum =0
    i=arr.length
    while(i--)
   // for(var i=1;i<=arr.length;i++)
    
        sum  +=Math.pow(arr[i],3)
    
    return sum
}
console.log(sum_Of_Cubes([1,5,9]));
