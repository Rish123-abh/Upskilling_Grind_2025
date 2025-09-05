/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {

    // This is my version 
//   let mapF=new Map();

//   for(let i=0;i<s.length;i++){
//     mapF.set(s[i],(mapF.get(s[i])||0)+1);
//   }
// let res=[];
//   for(let [char,freq] of mapF){
//     res.push([char,freq]);
//   }
//   res.sort((a,b)=>b[1]-a[1]);
// let ans="";
//   for(let i=0;i<res.length;i++){
//     for(let j=0;j<res[i][1];j++){
//         ans+=res[i][0];
//     }
//   }
//   return ans;


// better version 
  let mapF = new Map();

  for (let ch of s) {
    mapF.set(ch, (mapF.get(ch) || 0) + 1);
  }

  let res = [...mapF.entries()].sort((a, b) => b[1] - a[1]);

  let ans = '';
  for (let [char, freq] of res) {
    ans += char.repeat(freq);
  }

  return ans;
};