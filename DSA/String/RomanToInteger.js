/**
 * @param {string} s
 * @return {number}
 */
 const res={
    'I':1,
    'IV':4,
    'IX':9,
    'V':5,
    'X':10,
    'XL':40,
    'XC':90,
    'L':50,
    'C':100,
    'CD':400,
    'CM':900,
    'D':500,
    'M':1000
 }
var romanToInt = function(s) {
   let ans=0;
   for(let i=0;i<s.length;i++){
        let curr=res[s[i]];
        let next=res[s[i+1]];
        if(next && curr<next){
            ans-=curr;
        }
        else{
            ans+=curr;
        }
   } 
   return ans;
};