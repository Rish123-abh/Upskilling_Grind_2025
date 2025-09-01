/**
 * @param {number[]} arr
 * @returns {number[]}
 */
class Solution {
    findTwoElement(arr) {
        // code here
        // O(n) for time and space 
        // brute force 
    //   let ans=[];
    //   let map=new Array(arr.length).fill(0);
    //   for(let i=0;i<arr.length;i++){
    //       map[arr[i]-1]++;
    //   }
    //   for(let i=0;i<map.length;i++){
    //       if(map[i]===2){
    //           ans.push(i+1);
    //       }
    //   }
    //   for(let i=0;i<map.length;i++){
    //       if(map[i]===0){
    //           ans.push(i+1);
    //       }
    //   }
    
    let repeating ,missing;
    for(let i=0;i<arr.length;i++){
        let index=Math.abs(arr[i])-1;
        if(arr[index]<0){
            repeating=index+1;
        }
        else{
            arr[index]=-arr[index];
        }
    }
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            missing=i+1;
            break;
        }
    }
      
        
        return [repeating,missing];
    }
}