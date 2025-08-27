/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {

    // brute force approach approx O(n^3) this is first follow up it takes space O(mn)
//   let temp=[];
//   for(let i=0;i<matrix.length;i++){
//     for(let j=0;j<matrix[i].length;j++){
//         if(matrix[i][j]===0){
//             temp.push([i,j]);
//         }
//     }
//   }
//   for(let i=0;i<temp.length;i++){
//     let row=temp[i][0];
//     let col=temp[i][1];

//     for(let j=0;j<matrix.length;j++){
//         for(let k=0;k<matrix[j].length;k++){
//             if(j===row||k===col||(j===row && k===col)){
//                 matrix[j][k]=0;
//             }
//         }
//     }
//   }
//   return matrix;



// starting with second follow up O(m + n) space
// let row=new Array(matrix.length).fill(false);
// let col=new Array(matrix[0].length).fill(false);
// for(let i=0;i<matrix.length;i++){
//     for(let j=0;j<matrix[0].length;j++){
//         if(matrix[i][j]===0){
//             row[i]=true;
//             col[j]=true;
//         }
//     }
// }
// for(let i=0;i<matrix.length;i++){
//     for(let j=0;j<matrix[0].length;j++){
//         if(row[i]||col[j]){
//             matrix[i][j]=0;
//         }
//     }
// }
// return matrix;


// Now optimised constant space solution
// O(1) space  in this we will use row and column as  a marker 

let n=matrix.length;
let m=matrix[0].length;
let firstRowhasZero=false;
let firstColhasZero=false;
// first check whether first row or collumn has 0 or not 
for(let i=0;i<m;i++){
    if(matrix[0][i]===0){
        firstRowhasZero=true;
    }
}

for(let i=0;i<n;i++){
    if(matrix[i][0]===0){
         firstColhasZero=true;
    }
}
    

// Now mark row and col based on 0 found we will mark that row or col with 0


for(let i=1;i<n;i++){
    for(let j=1;j<m;j++){
          // 0 found
        if(matrix[i][j]===0){
            // setting col to 0
            matrix[0][j]=0;
            // setting row to 0
            matrix[i][0]=0;
        }
    }
}

// now will update element to 0 based on marker

for(let i=1;i<n;i++){
    for(let j=1;j<m;j++){
          // if 0 found on either first row or first col then set that element to 0
        if(matrix[0][j]===0||matrix[i][0]===0){
            matrix[i][j]=0;
        }
    }
}

// Now convert 0 for first row and first col 

if(firstRowhasZero){
    for(let i=0;i<m;i++){
        matrix[0][i]=0;
    }
}
if(firstColhasZero){
    for(let i=0;i<n;i++){
        matrix[i][0]=0;
    }
}
return matrix;
};