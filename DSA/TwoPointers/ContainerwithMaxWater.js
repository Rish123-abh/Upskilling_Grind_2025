/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left=0;
    let right=height.length-1;
    let ans=-Infinity;
    while(left<right){
        let area=(right-left)*Math.min(height[left],height[right]);
        ans=Math.max(ans,area);
        if(height[left]<height[right]){
            left++;
        }
        else{
            right--;
        }
    }
    return ans;
};