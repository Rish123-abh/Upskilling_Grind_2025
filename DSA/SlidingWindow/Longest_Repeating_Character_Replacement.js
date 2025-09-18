/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
  let maxLength=0;
  let maxFreq=0;
  let upperArr=new Array(26).fill(0);
    let left=0;
  for(let right=0;right<s.length;right++){
    let idx=s.charCodeAt(right)-'A'.charCodeAt(0);
    upperArr[idx]++;
    maxFreq=Math.max(maxFreq,upperArr[idx]);
    while((right-left+1)-maxFreq>k){
        idx=s.charCodeAt(left)-'A'.charCodeAt(0);
        upperArr[idx]--;
        left++;
    }
        maxLength=Math.max(maxLength,right-left+1);
  }  
  return maxLength;
};