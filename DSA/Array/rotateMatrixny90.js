/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let m=matrix.length;
    let n=matrix[0].length;
    // brute force approach space O(nm)
    // i row -> n-i-1 col 
    // (0,0)->(0,3)
    // (0,1)->(1,3)
    // (0,2)->(2,3)
    let ans=[];

    // optimised inplace 
// Transpose 
    let i=0;
    while(i<m){
        for(let j=i;j<n;j++){
            if(i!==j){
                [matrix[i][j],matrix[j][i]]=[matrix[j][i],matrix[i][j]];
            }
        }
        i++;
    }
    // console.log("Transpose",matrix);
    // now reverse each row 
    for(let i=0;i<matrix.length;i++){
        matrix[i].reverse();
    }
    // console.log("result",matrix);
    return matrix;
};