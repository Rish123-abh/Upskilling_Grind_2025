/**
 * @param {string} s
 * @return {string}
 */

var sortVowels = function(s) {
  let vowels="";
let str='aeiouAEIOU';
  for(let i=0;i<s.length;i++){
    if(str.includes(s[i])){
        vowels+=s[i];
    }
  }
  vowels=vowels.split("").sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0)).join("");
let ans="";
let j=0;
for(let i=0;i<s.length;i++){
    if(str.includes(s[i])){
        ans+=vowels[j++];
    }
    else{
        ans+=s[i];
    }
}
 return ans;
};