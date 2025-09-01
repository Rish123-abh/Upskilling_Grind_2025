/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
        intervals.sort((a,b)=>a[0]-b[0]);
        let ans=[intervals[0]];
        // This is the my brute force version 
        // for(let i=1;i<intervals.length;i++){
        // let lastar=ans[ans.length-1];
        // if(lastar[1]>=intervals[i][0] && lastar[1]<=intervals[i][1]){
        //     ans[ans.length-1]=[lastar[0],intervals[i][1]];
        // }
        // else if(lastar[1]>=intervals[i][0] && lastar[1]>=intervals[i][1]){
        //     ans[ans.length-1]=lastar;
        // }
        // else{
        //     ans.push(intervals[i]);
        // }
        // }




        // This is silightly better 
    for(let i=1;i<intervals.length;i++){
        let lastar=ans[ans.length-1];
        if(lastar[1]>=intervals[i][0]){
            lastar[1]=Math.max(lastar[1],intervals[i][1]);
        }
        else{
            ans.push(intervals[i]);
        }}
        return ans;
};