/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let col = new Map();
let row = new Map();
let box = new Map();
let emptyCells=[];
// This solution is of my own thinking 
// function trackNumbers(board) {
//     for (let i = 0; i < 9; i++) {
//         for (let j = 0; j < 9; j++) {
//             let ele = board[i][j];
//             if (ele != '.') {
//                 let boxI = Math.floor(i / 3);
//                 let boxJ = Math.floor(j / 3);
//                 let boxKey = `${boxI}-${boxJ}`;

//                 row.set(i, (row.get(i) || new Set()).add(ele));
//                 col.set(j, (col.get(j) || new Set()).add(ele));
//                 box.set(boxKey, (box.get(boxKey) || new Set()).add(ele));
//             }
//         }
//     }
// }
// function remainingNumbers(rowIndex, colIndex) {
//     const allNumbers=['1','2','3','4','5','6','7','8','9'];
//     let rowSet = row.get(rowIndex)|| new Set();
//     let colSet = col.get(colIndex) || new Set();;
//     let boxI = Math.floor(rowIndex / 3);
//     let boxJ = Math.floor(colIndex / 3);
//     let boxKey = `${boxI}-${boxJ}`;
//     let boxSet = box.get(boxKey) || new Set();;
//     let presentElement=new Set([...rowSet,...colSet,...boxSet]);

//     let remainingElements=allNumbers.filter((digit)=>!presentElement.has(digit));
    
//     return {remainingElements,boxKey};
// }
// function recurseSolution(board){

//     for(let i=0;i<board.length;i++){
//             for(let j=0;j<board[0].length;j++){
//                 let ele=board[i][j];
//                 if(ele==='.'){
//                     let {remainingElements,boxKey}=remainingNumbers(i,j);
//                 for(let k=0;k<remainingElements.length;k++){
//                     board[i][j]=remainingElements[k];
//                     row.set(i,(row.get(i)||new Set()).add(remainingElements[k]));
//                     col.set(j,(col.get(j)||new Set()).add(remainingElements[k]));
//                     box.set(boxKey,(box.get(boxKey)||new Set()).add(remainingElements[k]));
//                     if(recurseSolution(board)){
//                         return true;
//                     }
//                     row.get(i).delete(remainingElements[k]);
//                     col.get(j).delete(remainingElements[k]);
//                     box.get(boxKey).delete(remainingElements[k]);
//                     board[i][j]='.';
//                 }
//                 return false;
//                 }
//             }
//     }
//     return true;
// }


// This Is Optimised version by storing emptycells in array to avoid again and again look up of empty cell using loops 
function trackNumbers(board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let ele = board[i][j];
            if (ele != '.') {
                let boxI = Math.floor(i / 3);
                let boxJ = Math.floor(j / 3);
                let boxKey = `${boxI}-${boxJ}`;

                row.set(i, (row.get(i) || new Set()).add(ele));
                col.set(j, (col.get(j) || new Set()).add(ele));
                box.set(boxKey, (box.get(boxKey) || new Set()).add(ele));
            }
            else{
                emptyCells.push([i,j]);
            }
        }
    }
}
function remainingNumbers(rowIndex, colIndex) {
    const allNumbers=['1','2','3','4','5','6','7','8','9'];
    let rowSet = row.get(rowIndex)|| new Set();
    let colSet = col.get(colIndex) || new Set();;
    let boxI = Math.floor(rowIndex / 3);
    let boxJ = Math.floor(colIndex / 3);
    let boxKey = `${boxI}-${boxJ}`;
    let boxSet = box.get(boxKey) || new Set();;
    let presentElement=new Set([...rowSet,...colSet,...boxSet]);

    let remainingElements=allNumbers.filter((digit)=>!presentElement.has(digit));
    
    return {remainingElements,boxKey};
}
function recurseSolution(board,emptyCells,index){
    if(index>=emptyCells.length){
        return true
    }
    let [i,j]=emptyCells[index];

                    let {remainingElements,boxKey}=remainingNumbers(i,j);
                for(let k=0;k<remainingElements.length;k++){
                    board[i][j]=remainingElements[k];
                    row.set(i,(row.get(i)||new Set()).add(remainingElements[k]));
                    col.set(j,(col.get(j)||new Set()).add(remainingElements[k]));
                    box.set(boxKey,(box.get(boxKey)||new Set()).add(remainingElements[k]));
                    if(recurseSolution(board,emptyCells,index+1)){
                        return true;
                    }
                    row.get(i).delete(remainingElements[k]);
                    col.get(j).delete(remainingElements[k]);
                    box.get(boxKey).delete(remainingElements[k]);
                    board[i][j]='.';
                }
                return false;
    }
var solveSudoku = function (board) {
 col = new Map();
 row = new Map();
 box = new Map();
 emptyCells=[];
    // This will track all numbers presnt in row ,col and box
    trackNumbers(board);
    // recurseSolution(board);
    recurseSolution(board,emptyCells,0);

};