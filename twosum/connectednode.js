const getNodecost=(n,connectedNodes)=>{
    let result = 0;
    let subArray = [];
    subArray = [...subArray, connectedNodes[0]];
    for(let i=1; i< connectedNodes.length; i++){
        var isadded = false;
        for(let sin=0; sin<subArray.length;sin++){
            if(subArray[sin].indexOf(connectedNodes[i][0]) !== -1){
                isadded = true;
                subArray[sin] = [...subArray[sin],connectedNodes[i][1]];
            }
            else if (subArray[sin].indexOf(connectedNodes[i][1]) !== -1){
                isadded = true;
                subArray[sin] = [...subArray[sin],connectedNodes[i][0]];
            }
        }
        if(!isadded){
            subArray = [...subArray,connectedNodes[i]];
        }
        console.log(subArray);
    }
    let connectedcostSofar = 0;
    let connectedNodeList = 0;
    for(let sub of subArray){
        connectedNodeList +=sub.length;
        connectedcostSofar +=Math.ceil(Math.sqrt(sub.length));
    }
    result = connectedcostSofar +(n-connectedNodeList);
    return result;
}

console.log(getNodecost(6,[[1,2],[1,3],[4,5]])); //