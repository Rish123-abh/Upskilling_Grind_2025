/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let ans=[];
    let temp=[];

    for(let i=1;i<=numRows;i++){
        if(i===1){
            ans.push([1]);
        }
        else if(i===2){
            ans.push([1,1]);
        }
        else{
            temp=[];
        for(let j=1;j<=i;j++){
            if(j===1 || j===i){
                temp.push(1);
            }
            else{
                temp.push(ans[i-2][j-1]+ans[i-2][j-2]);
            }
        }
        ans.push(temp);
        }
    }
    return ans;
};