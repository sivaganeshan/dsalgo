const howsum = (targetNumber,array) =>{
    let result = [];
    for(let arrayIndex=0; arrayIndex<array.length; arrayIndex++){

        let diff = targetNumber - array[arrayIndex];
        let subindex = array.indexOf(diff);
        if(subindex>-1){
            result.push([arrayIndex+1,subindex+1]);
        }
        if(diff ===0){
            result.push([arrayIndex+1])
        }
    }
   return result;
}


const bestsum = (targetsum, array)=>{
    if(targetsum === 0) return [];
    if(targetsum< 0) return null;
    let shortestCombination = null;
    for (let num of array){
        let remainder = targetsum - num;
        let reminderCombination = bestsum(remainder,array);
        
        if(reminderCombination != null){
            let combinations = [...reminderCombination, num];
            if(shortestCombination === null || combinations.length<shortestCombination.length ){
                shortestCombination= combinations;
            }
        }
    }
    return shortestCombination;
}

console.log(bestsum(7,[5,3,4,7])); 