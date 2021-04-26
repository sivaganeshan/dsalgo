const longestPalindrome = (s) =>{

    //length of the string 'n'
    let result = null;
    if(s.length ===1) result=s;
    for(i=0;i<s.length; i++){   //n times 
        for(j=i+1;j<=s.length;j++){ //(n-1) times
            let checkString = s.slice(i,j); 
            if(checkString === checkString.split("").reverse().join("")){
                if(result === null || result.length<checkString.length){
                    result = checkString;
                }
            }
        }
    }
    return result;
};

 //console.log(longestPalindrome("bb"));
// console.log(longestPalindrome("babad"));
// console.log(longestPalindrome("cbbd"));
// console.log(longestPalindrome("a"));
// console.log(longestPalindrome("ac"));

const longpalindrome_optimised=(s)=>{
    let maxlength =1;
    let start = 0;
    let len =s.length;
    let low = 0, high=0;
    for(let i=1; i<len ; i++){

    //even longest palindrom
    low = i-1;
    high = i;
    while(low>=0 && high<len && s[low]===s[high]){
        let newMaxlength = high-low+1;
        if(newMaxlength> maxlength){
            start = low;
            maxlength = high-low+1;
        }
        --low;
        ++high;

    }
    //odd longest palindrome
    low = i-1;
    high = i+1;
    while(low>=0 && high<len && s[low]===s[high]){
        let newMaxlength = high-low+1;
        if(newMaxlength> maxlength){
            start = low;
            maxlength = high-low+1;
        }
        --low;
        ++high;

    }
       
    }
    return s.substring(start,start+maxlength);
}

console.log(longpalindrome_optimised("cbbd"));
 console.log(longpalindrome_optimised("bb"));
console.log(longpalindrome_optimised("babad"));
console.log(longpalindrome_optimised("cbbd"));
console.log(longpalindrome_optimised("a"));
console.log(longpalindrome_optimised("ac"));