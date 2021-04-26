const rainwater=(height)=>{
    let left = 0, right = height.length - 1;
        let res = 0, maxleft = 0, maxright = 0;
        while (left <= right) {
            if (height[left] <= height[right]) {
                if (height[left] >= maxleft) {
                    maxleft = height[left];
                } else {
                    res += maxleft - height[left];
                }
                left++;
            }
            else {
               if (height[right] >= maxright) {
                   maxright = height[right];
               } else {
                   res += maxright - height[right];
               }
                right--;
            }
        }
        return res;
}


const rainwater_dp=(height)=>{
    let res =0;
    let leng = height.length;
    let max_left = new Array(leng);
    let max_right = new Array(leng);
    
    let max_left_sofar= height[0];
    for(let i=1; i< leng ; i++){
        max_left_sofar = max_left_sofar<height[i]? height[i]:max_left_sofar;;
        max_left[i] = max_left_sofar
    }
    let max_right_sofar = height[leng-1];
    for(let i=leng-2; i>=0; i--){
        max_right_sofar = max_right_sofar<height[i]? height[i]:max_right_sofar;
        max_right[i]= max_right_sofar;
    }
    for(let i=1; i< leng-1 ; i++ ){
        let minOfleftRight = max_right[i]>max_left[i]?max_left[i]:max_right[i];
        res += minOfleftRight - height[i];
    }

  return res;
}
//console.log(rainwater([4,2,0,3,2,5])); //9

//console.log(rainwater([0,1,0,2,1,0,1,3,2,1,2,1]));  //6 

console.log(rainwater_dp([0,1,0,2,1,0,1,3,2,1,2,1])); 