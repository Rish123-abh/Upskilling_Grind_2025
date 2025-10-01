/**
 * @param {number[]} heights
 * @return {number}
 */
 function nextSmallerElement(heights){
    let ans=Array(heights.length).fill(-1);
    let stack =[];
    for(let i=heights.length-1;i>=0;i--){
        while(stack.length!==0 && heights[i]<=heights[stack[stack.length-1]]){
            stack.pop();
        }
        if(stack.length>0){
            ans[i]=stack[stack.length-1];
        }
        stack.push(i);
    }
    return ans;
 }
 function prevSmallerElement(heights){
 let ans=Array(heights.length).fill(-1);
    let stack =[];
    for(let i=0;i<heights.length;i++){
        while(stack.length!==0 && heights[i]<=heights[stack[stack.length-1]]){
            stack.pop();
        }
        if(stack.length>0){
            ans[i]=stack[stack.length-1];
        }
        stack.push(i);
    }
    return ans;
 }
var largestRectangleArea = function(heights) {
   // Basically we need to find next smaller and previous smaller Element 
   let previousElements=prevSmallerElement(heights);
   let nextElements=nextSmallerElement(heights);
    let maxArea=0;
    for(let i=0;i<heights.length;i++){
        let length=heights[i];
        if(nextElements[i]===-1){
            nextElements[i]=heights.length;
        }
        let width=nextElements[i]-previousElements[i]-1;
        let currArea=length*width;
        maxArea=Math.max(maxArea,currArea);
    }
    return maxArea;
};