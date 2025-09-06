/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function(s) {
    // Brute Force Approach 
//     let sum=0;
//   for(let i=0;i<s.length;i++){
//     let map=new Map();
//     map.set(s[i],1);
//     for(let j=i+1;j<s.length;j++){
//         map.set(s[j],(map.get(s[j])||0)+1);

//         if(j-i+1>=3){
//             let arr=[...map.entries()].sort((a,b)=>a[1]-b[1]);
//             sum+=arr[arr.length-1][1]-arr[0][1];
//         }
//     }
//   } 
//   return sum;

// Optimised 
    let sum=0;
  for(let i=0;i<s.length;i++){
    let countFreq=new Array(26).fill(0);
    for(let j=i;j<s.length;j++){
    countFreq[s.charCodeAt(j)-97]++;
        let maxFreq=0,minFreq=Infinity;
        if(j-i+1>=3){
            for(let f of countFreq){
                if(f>0){
            maxFreq=Math.max(maxFreq,f)
            minFreq=Math.min(minFreq,f);
                }
            }
            sum+=maxFreq-minFreq;
        }
    }
  } 
  return sum; 
};