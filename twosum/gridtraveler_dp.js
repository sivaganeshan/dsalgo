const gridtraveler =(m,n,mem={})=>{
    const key = m +','+n;
    if(key in mem) return mem[key];
    if(m===1 && n===1) return 1;
    if(m===0 || n===0) return 0;
    mem[key] = gridtraveler(m-1,n,mem)+gridtraveler(m,n-1,mem);
    return mem[key];
}

console.log(gridtraveler(1,1));
console.log(gridtraveler(2,3));
console.log(gridtraveler(4,4));
console.log(gridtraveler(18,18));