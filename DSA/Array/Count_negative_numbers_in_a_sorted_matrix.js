/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    // Brute Force Approach 
//     let ans=0;
//   let n=grid.length;
//   for(let i=0;i<n;i++){
//     for(let j=0;j<grid[i].length;j++){
//         if(grid[i][j]<0){
//             ans++;
//         }  }}
//         return ans;


// Optimised approach  O(m+n) but it does not handle the case where getting only -ve at top right or bottom left  
// let n=grid.length;
// let m=grid[0].length;
// let i=n-1;
// let j=0;
// let ans=0;
// while(i>=0 && j<=m){
//     if(grid[i][j]<0){
//         ans+=m-j;
//         i--;
//     }
//     else{
//         j++;
//     }
// }
// return ans;

// Using Binary Search approach 
let ans =0;
let m=grid[0].length;
for(let i=0;i<grid.length;i++){
    let s=0,e=m-1;
    while(s<=e){
    let mid=Math.floor((s+e)/2);
    if(grid[i][mid]<0){
        e=mid-1;
    }
    else{
        s=mid+1;
    }
    }
    ans+=m-s;
}
return ans;

};