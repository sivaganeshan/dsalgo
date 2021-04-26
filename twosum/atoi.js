var myAtoi = function(s) {
    let minInteger = Math.pow(-2,31);
    let maxInteger = Math.pow(2,31)-1;
    let finalNumber ="";
    let symbol = "";
    if(s[0] ==="." || !parseInt(s[0])&& (s[0]!==  '+' && s[0]!=='-')){
          return 0;  
    }
    for(let i=0; i< s.length; i++){
        
        if(s[i] ===" "){
            continue;
        }
        if(s[i]=='+' || s[i]=='-'){
            symbol = symbol.concat(s[i]);
            continue;
        }
        if(s[i] ===".")
            break;
        if(parseInt(s[i])){
            finalNumber = finalNumber.concat(s[i]);
        }else{
            break;
        }
    }
    if(symbol.length>1)
    {
        return 0;
    }
    let result = parseInt(symbol+finalNumber);
    result = result<minInteger?minInteger:result;
    result = result>maxInteger?maxInteger:result;
    return result;
};

console.log(myAtoi("21474836460"));