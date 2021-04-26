var lengthOfLongestSubstring = function(s) {
    if(s ==="" || s === null || s=== undefined) return 0;
    let maxLength_Sofar=1;
    let uniqueStr = s[0];
    let result = 1;
    for(let i=1; i<s.length; i++){
        if(s[i] !== s[i-1] && uniqueStr.indexOf(s[i]) ===-1){
            uniqueStr = uniqueStr.concat(s[i]);
            maxLength_Sofar++;
        }
        else{
            if(result<maxLength_Sofar){
            result = maxLength_Sofar;
            }
            uniqueStr = s[i];
            maxLength_Sofar = 1;
            for(let j=i-1; j>=0 ; j-- ){
                if(uniqueStr.indexOf(s[j]) ===-1){
                    uniqueStr = uniqueStr.concat(s[j]);
                    maxLength_Sofar++;
                 }else{
                     break;
                 }
            }
        }
        if(result<maxLength_Sofar){
            result = maxLength_Sofar;
            }
    }
    return result ;
};

console.log(lengthOfLongestSubstring("pwwkew"));