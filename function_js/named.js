var mul = function(a,b){
    return a*b
}

var result=mul(4,5)
console.log("Function Expression    4*5   ",result);


var userName = "bill";
(function (name){
    function display(name)
    {
        console.log("IIFE....   ",name);
    }
    display(name);
})(userName);

var hello;

hello = () => {
    return "GOOD AFTERNOON...";
}
console.log("ARG FUN.....     ",hello());

var bye;

bye = function(){
    return "GOOD NIGHT...";
}
console.log(bye());

var z = function(x,y){
    return x+y;
}
console.log("Named Function",z);

