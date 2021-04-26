var removeDuplicates = function(nums) {
    
    nums = nums.filter((c,index)=>{
        return nums.indexOf(c) ===index;
    });
    // for(let i=1;i<nums.length;i++){
    //     if(nums[i] == nums[i-1]){
    //           nums.splice(i-1,1);
    //     }
    // }
    return nums;
};

// console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
