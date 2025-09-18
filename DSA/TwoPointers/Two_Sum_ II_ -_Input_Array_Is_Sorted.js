/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left=0,right=numbers.length-1;
    let ans=[];
    while(left<right){
        let sum=numbers[left]+numbers[right];
        if(sum===target){
            ans.push(left+1);
            ans.push(right+1);
            break;
        }

        else if(sum<target){
            left++;
        }
        else{
            right--;
        }
    }
    return ans;
};