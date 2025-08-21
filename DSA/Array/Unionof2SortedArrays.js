/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
class Solution {
    findUnion(a, b) {
        // code here
        let ans=[];
        let i=0;
        let j=0;
        let last=-Infinity;
        let alength=a.length;
        let blength=b.length;
        while(i<alength && j<blength){
            if(a[i]===b[j]){
                    if(a[i]!=last){
                    ans.push(a[i]);
                    last=a[i];
                        
                    }
                    i++;
                    j++;
                }
            
            else if(a[i]<b[j]) {
                if(a[i]!=last){
                    ans.push(a[i]);
                    last=a[i];
                    
                }
                    i++;
                
            }
            else{
                if(b[j]!=last){                    
                    ans.push(b[j]);
                    last=b[j];
                }
                    j++;
                }
                
            
        }
        
        while(i<alength){
            if(a[i]!=last){
                    ans.push(a[i]);
                    last=a[i];
                }
                    i++;
        }
        while(j<blength){
            if(b[j]!=last){
                    ans.push(b[j]);
                    last=b[j];
                }
                    j++;
        }
       return ans;
        
    }
}