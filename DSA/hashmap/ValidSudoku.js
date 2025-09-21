/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let row=new Map();
    let col=new Map();
    let matrix=new Map();
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
                 let rowvalue=Math.floor(i/3);
            let colvalue=Math.floor(j/3);
            let num=board[i][j];
            if(num!=="."){
            let boxKey=`${rowvalue},${colvalue}`;
            if(
                (row.has(i) && row.get(i).has(num))||
                (col.has(j) && col.get(j).has(num))||
                (matrix.has(boxKey) && matrix.get(boxKey).has(num))){
                return false;
            }

            row.set(i,(row.get(i)||new Set()).add(num));
            col.set(j,(col.get(j)||new Set()).add(num));
            matrix.set(boxKey,(matrix.get(`${rowvalue},${colvalue}`)||new Set()).add(num));
            }
        }
    }
     return true;
};