console.log("1");
setTimeout(()=>{
    console.log("2");

},0);
console.log("3");
console.log("4");
console.log("5");
console.log("6");
console.log("7");
var count=1;
setInterval(()=>{
        count*=2;
    console.log(count);
},10)