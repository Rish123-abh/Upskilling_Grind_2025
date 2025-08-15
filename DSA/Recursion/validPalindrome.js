// Concept Learned -> charCodeAt(i) i is index -> This is used to find the ASCii value

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let str="";
  for(let i=0;i<s.length;i++){
    if((s.charCodeAt(i)>=97 && s.charCodeAt(i)<=122) || (s.charCodeAt(i)>=65 && s.charCodeAt(i)<=90)||s.charCodeAt(i)>=48 && s.charCodeAt(i)<=57){
        str+=s[i].toLowerCase();
    }
  }
  let i=0;
  let j=str.length-1;
  while(i<=j){
    if(str[i]!=str[j]){
        return false;
    }
    i++;
    j--;
  }  
    return true;
};