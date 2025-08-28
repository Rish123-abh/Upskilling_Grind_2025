/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  let ans=[];
    let n=matrix.length;
    let m=matrix[0].length;
  let total=n*m;
  let count=0;
    let startingRow=0;
    let startingCol=0;
    let endingRow=n-1;
    let endingCol=m-1;
  while(count<total){
    // move  Right
    for(let i=startingCol;i<=endingCol&& count<total;i++){
        ans.push(matrix[startingRow][i]);
        count++;
    } 
    startingRow++;
    // move  Down
    for(let i=startingRow;i<=endingRow&& count<total;i++){
        ans.push(matrix[i][endingCol]);
        count++;
    } 
    endingCol--;
    // move  left
    for(let i=endingCol;i>=startingCol&& count<total;i--){
        ans.push(matrix[endingRow][i]);
        count++;
    } 
    endingRow--;
    // move  Up 
    for(let i=endingRow;i>=startingRow&& count<total;i--){
        ans.push(matrix[i][startingCol]);
        count++;
    } 
    startingCol++;
  }

  return ans;
};