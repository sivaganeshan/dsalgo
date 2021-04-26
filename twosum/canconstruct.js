const canconstruct = (target,wordbank,mem={})=>{
    if(target in mem)  return mem[target];
    if(target ==='') return true;
    for(let word of wordbank){
        if(target.indexOf(word) ===0){
            if(canconstruct(target.slice(word.length),wordbank)=== true){
                mem[target] = true;
                return mem[target];
            }
        }
    }
    mem[target] = false
    return mem[target];
}

const canconstructtab=(target, wordbank) =>{

    let table = new Array(tatget.length+1).fill(false);
    table[0] = true;

    for(let i=0; i< target.length ; i++){
        if(table[i]===true){
            for(let word of wordbank){
                if(target.slice(i,i+word.length) === word){
                    table[i+word.length] = true;
                }
            }
        }
    }
    return table[target.length];
}
console.log(canconstruct("abcdef",["ab","abc","cd","def","abcd"]));