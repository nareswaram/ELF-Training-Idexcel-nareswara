function Mean(number) {

    var num=number;
    var sum=0;
    while(num!=0)
    {
        var r=num%10;
        sum=sum+r;
        num=num/10;
    }
    return sum/2;
    
}

var res=Mean(42);
console.log(res);
