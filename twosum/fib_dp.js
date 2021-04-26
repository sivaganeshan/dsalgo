const fib= (n, mem={})=>{
    if(n in mem) return mem[n];
    if(n<=2) return 1;
    mem[n] = fib(n-1,mem)+fib(n-2,mem);
    return mem[n];
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(5));
console.log(fib(50));
