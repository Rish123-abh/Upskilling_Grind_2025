/**
 * @param {number} n
 * @return {string[][]}
 */
 function answerFromMatrix(matrix,n){
    let arr=[];
    for(let i=0;i<n;i++){
    let str="";
        for(let j=0;j<n;j++){
            if(matrix[i][j]===-1){
                str+='.';
            }
            else{
                str+='Q';
            }
        }
        arr.push(str);
    }
    return arr;
 }
 function transformMatrix(matrix,currentRow,currentCol,n){
// Row  tranfrom 
            for(let col=0;col<n;col++){
                if(col!==currentCol && matrix[currentRow][col]!==1){
                matrix[currentRow][col]=-1;
                }
            }
            // Col Transform 
            for(let row=0;row<n;row++){
                if(row!==currentRow){
                matrix[row][currentCol]=-1;
                }
            }   
                let rowIndex=currentRow+1;
                let colIndex=currentCol+1;
            // Diagonal Tranform 
            while(rowIndex<n && colIndex<n){
                matrix[rowIndex][colIndex]=-1;
                rowIndex++;
                colIndex++;
            }
            rowIndex=currentRow-1;
            colIndex=currentCol-1;
            while(rowIndex>=0 && colIndex>=0){
                matrix[rowIndex][colIndex]=-1;
                rowIndex--;
                colIndex--;
            }

            rowIndex=currentRow-1;
            colIndex=currentCol+1;
            while(rowIndex>=0 && colIndex<n){
                matrix[rowIndex][colIndex]=-1;
                rowIndex--;
                colIndex++;
            }

            rowIndex=currentRow+1;
            colIndex=currentCol-1;
            while(rowIndex<n && colIndex>=0){
                matrix[rowIndex][colIndex]=-1;
                rowIndex++;
                colIndex--;
            }
 }


 function RecurseSolution(n,matrix,queenCount,ans,currentRow){
   let original = matrix.map(row => [...row]);
    if(queenCount===n){
        ans.push(answerFromMatrix(matrix,n));
        return;
    }
        for(let j=0;j<n;j++){
            if(matrix[currentRow][j]===0){
            matrix[currentRow][j]=1;
            transformMatrix(matrix,currentRow,j,n);
            RecurseSolution(n,matrix,queenCount+1,ans,currentRow+1);
            matrix = original.map(row => [...row]);
            }
        }


 }
var solveNQueens = function(n) {
  matrix = Array.from({length: n}, () => Array(n).fill(0));
    console.log(matrix);
    let ans=[];
    RecurseSolution(n,matrix,0,ans,0);
    return ans;
};