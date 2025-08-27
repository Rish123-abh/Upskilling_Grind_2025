// This is C++ code for finding the longest consecutive sequence in an array.
// using set but it has time complexity of O(nlogn) due to set operations.


// class Solution {
// public:
//     int longestConsecutive(vector<int>& nums) {
//         if(nums.size()==0){
//             return 0;
//         }
//          set<int>ans;
//          for(int i=0;i<nums.size();i++){
//             ans.insert(nums[i]);
//          }
//          int cnt=1;
//          int result=0;
//          for(auto it:ans){ 
//             auto x=ans.find(it+1);

//             if(x != ans.end()){
//                 cnt++;
//             }
//             else{
//                 result=max(result,cnt);
//                 // cout<<"Result"<<result<<endl;
//                 cnt=1;
//             }
//          }
//         //  cout<<"Final"<<result<<cnt;
//     return max(result,cnt);
//     }

// };


// JS code for the same problem with O(n) time complexity using set

// here logic is to check for every element if it is the starting element of the sequence or not
// if it is the starting element then we will keep on checking for next elements in the sequence
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length==0)return 0;
  // Here set behaves as unordered_set in c++ so not in sorted order
  let temp=new Set(nums);
    let ans=0;
  for(let num of temp){
    // we will check whether current element is first element of sequence or not 
    let currElement=num;
    let cnt=1;

    if(!temp.has(num-1)){
        while(temp.has(currElement+1)){
            currElement++;
            cnt++;
        }
    }
    ans=Math.max(ans,cnt);
  }
return ans;
};