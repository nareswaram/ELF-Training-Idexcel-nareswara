function Digits(n) 
{ 
    var largest = 0; 
    var smallest=0;
    while(n!=0)  
    { 
        var res=n%10; 
        largest = Math.max(res, largest); 
        smallest = Math.min(res, smallest); 
  
        n = n / 10; 
    } 
    return [largest,smallest];
    
} 

var num=Digits([1,2,3,4,5]);
console.log(num);














