const fact =(n)=>{
    
    if(n<=1) return 1;
    return n* fact(n-1);
}

console.log(fact(1));
console.log(fact(0));
console.log(fact(2));
console.log(fact(5));
let start = new Date().getTime();
console.log(fact(120));
let end = new Date().getTime();
console.log(start, end);