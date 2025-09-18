/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
 



     /* BRUTE FORCE APPROACH */
//       let n = s.length;
//   let ans = 0;

//   for (let i = 0; i < n; i++) {
//     let seen = new Set();
//     for (let j = i; j < n; j++) {
//       if (seen.has(s[j])) {
//         break; // duplicate found, stop this window
//       }
//       seen.add(s[j]);
//       ans = Math.max(ans, j - i + 1);
//     }
//   }

//   return ans;

// This is my solution  for sliding window 
//    let ans=0;
//    let left=0,right=0;
//     let set =new Set();
//     while(right<s.length && left<=right){
//         if(set.has(s[right])){
//             while(left<=right){
//                 if(s[left]==s[right]){
//                     left++;
//                     break;
//                 }
//                 set.delete(s[left]);
//                 left++;
//             }
//         }
//         else{
//             set.add(s[right]);
//             ans=Math.max(ans,right-left+1);
//         }
//         right++;
//     }

//     return ans;

// This is cleaner solution

let ans=0;
let left=0;
let set=new Set();
for(let right=0;right<s.length;right++){
    while(set.has(s[right])){
        set.delete(s[left]);
        left++;
    }
    set.add(s[right]);
    ans=Math.max(ans,right-left+1);
}
return ans;
};