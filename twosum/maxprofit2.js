var maxProfit = function(prices) {
     let length = prices.length;
    // let diff = new Array(length -1).fill(0);
    // for(let i=1; i<length; i++){
    //     diff[i] = prices[i]- prices[i-1];
    // }
    // let max_cur =0;
    // for(let j=1; j< diff.length; j++){
    //    // max_cur = Math.max(max_cur,diff[j]);
    //     //max_cur = Math.max(diff[j], diff[j]+diff[j-1],diff[j-1],max_cur);
    //     if(diff[j]>0){
    //         max_cur+= diff[j];
    //     }
    // }
    // return max_cur;
    if(length<2)
    return 0;
    let max_cur = 0;

    for(let i=1; i<length; i++){
       max_cur+= Math.max(0,prices[i]-prices[i-1])
    }
    return max_cur;

};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,2,3,4,5]));