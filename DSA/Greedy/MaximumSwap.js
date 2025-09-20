/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
    // Greedy Approach 
    let arr=num.toString().split("");
    for(let i=0;i<arr.length;i++){
        let maxValue=arr[i];
        let maxIndex=i;
        for(let j=arr.length-1;j>i;j--){
            if(arr[j]>maxValue){
                maxIndex=j;
                maxValue=arr[j];
            }
        }
        if(maxValue>arr[i]){
            [arr[i],arr[maxIndex]]=[arr[maxIndex],arr[i]];
           return parseInt(arr.join(""));
        }
    }
return num;
};