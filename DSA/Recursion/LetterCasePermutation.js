/**
 * @param {string} s
 * @return {string[]}
 */
 // This is my solution passed but not a clean code 
//  function recurseSolution(s,ans,temp,index) {
//     if(index>=s.length && temp.length===s.length){
//         if(!ans.includes(temp.join(''))){
//         return ans.push(temp.join(''));
//         }
//     }

//     for(let i=index;i<s.length;i++){
//     // ignore
//         temp.push(s[i]);
//         recurseSolution(s,ans,temp,i+1);
//         temp.pop();

//     // accept
//     let char=s[i].charCodeAt(0);
    
//         if(s[i]>='0' && s[i]<='9'){
//             temp.push(s[i]);
//         }
//     if(char>=97 && char<=122){
//     let newChar =char-32;
//     temp.push(String.fromCharCode(newChar));
//     }
//     if(char>=65 && char<=91){
//     let newChar =char+32;
//     temp.push(String.fromCharCode(newChar));
//     }
//     recurseSolution(s,ans,temp,i+1);
//     temp.pop();
//     }
//     }


// Main Key is if we have choice either to select or ignore then dont need of for loop 
function letterRecursion(s,index,string,ans){
    if(string.length===s.length){
         ans.push(string);
         return;
    }
    if(isNaN(parseInt(s[index]))){
        // Lowercase
        letterRecursion(s,index+1,string+ s[index].toLowerCase(),ans); 
        // Uppercase
        letterRecursion(s,index+1,string+ s[index].toUpperCase(),ans); 
    }
    else{
    // For digit 
    letterRecursion(s,index+1,string+s[index],ans);
    }
}

var letterCasePermutation = function(s) {
  let ans=[];
  letterRecursion(s,0,"",ans);
  return  ans; 
};