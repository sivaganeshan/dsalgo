const twosum =( a, b, target)=>{
    a.sort((a,b)=> a[1]-b[1]);
    b.sort((a,b)=> a[1]-b[1]);

    let aindex = 0;
    let max= -Infinity;
    let bindex = b.length -1;
    let result =[];
    while(aindex < a.length && bindex>=0){
        let sum = a[aindex][1]+b[bindex][1];
        if(target<sum){
            bindex--;
        }
        else{
            if(max<=sum){

                if(max<sum){
                max=sum;
                result=[];
                }

                result.push([a[aindex][0],b[bindex][0]]);
                let subindex=bindex-1;
                while(subindex>=0 && b[subindex][1] === b[subindex+1][1]){
                    result.push([a[aindex][0],b[subindex][0]]);
                    subindex--;
                }
            }
            aindex++;
        }

    }
    return result;
    }
    

console.log(twosum([[1, 8], [2, 7], [3, 14]], [[1, 5], [2, 10], [3, 14]], 20));
console.log(twosum([[1, 8], [2, 15], [3, 9]], [[1, 8], [2, 11], [3, 12]], 20));