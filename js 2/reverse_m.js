function reverseString(strng) {
    var str=strng.toString();

    var splitString = str.split(""); 

    var reverseArray = splitString.reverse(); 
  
    var joinArray = reverseArray.join(""); 
    
    return joinArray;
}
 
var strng='ganga';

var a=reverseString(strng);
console.log(a);
