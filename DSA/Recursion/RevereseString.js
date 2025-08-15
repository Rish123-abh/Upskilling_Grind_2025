// Concept Learned -> Swapping in js  ->  [s[i],s[j] ]=[s[j],s[i]]; 

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

function reverserecursion(s,i,j){
    if(i>j)return;
    [s[i],s[j] ]=[s[j],s[i]];
    reverserecursion(s,i+1,j-1);
}
var reverseString = function(s) {
  let i=0;
  let j=s.length-1;
//   while(i<=j){
//     [s[i],s[j]]=[s[j],s[i]];
//     i++;
//     j--;
//   }
reverserecursion(s,i,j);
return s;
};