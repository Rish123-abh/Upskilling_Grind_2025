/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  let ans="";
    s=s.trim();                    
    let sign=1;
    let i=0;
if(s[0]==='-'|| s[0]==='+'){
    s[0]==='-'?sign=-1:sign=1
    i++;
}

  for(;i<s.length;i++){
    if(s.charCodeAt(i)>=48 && s.charCodeAt(i)<=57){
        ans+=s[i];
    }
    else{
        break;
    }
  }
  if(ans===""){
    return 0;
  }

  let res= parseInt(ans)*sign;
  let maxLimit=2**31-1;
  let minLimit=-(2**31);

  if(res>maxLimit){
        return maxLimit;
  }
  else if(res<minLimit){
        return minLimit;
  }
  return res;
};