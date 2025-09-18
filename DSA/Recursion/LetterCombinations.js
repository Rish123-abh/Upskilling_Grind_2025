/**
 * @param {string} digits
 * @return {string[]}
 */
 let map={
    "2":"abc",
    "3":"def",
    "4":"ghi",
    "5":"jkl",
    "6":"mno",
    "7":"pqrs",
    "8":"tuv",
    "9":"wxyz",
  }
 function recurseSolution(digits,ans,temp,index){
    if(index>=digits.length){
        ans.push(temp);
        return;
    }
let str=map[digits[index]];

for(let i=0;i<str.length;i++){
    recurseSolution(digits,ans,temp+str[i],index+1);
}


 }
var letterCombinations = function(digits) {
    if(digits.length===0){
        return [];
    }
ans=[];
recurseSolution(digits,ans,"",0);
return ans;

};