    /**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let candies=new Array(ratings.length).fill(1);

// We need to check from left and right both

// Left  -> Will check Element which is greater then left element 

for(let i=1;i<ratings.length;i++){
    if(ratings[i]>ratings[i-1]){
        candies[i]=candies[i-1]+1;
    }
}
/// Right -> Will Check Element Which is greater then right element 
for(let i=ratings.length-2;i>=0;i--){
    if(ratings[i]>ratings[i+1]){
        candies[i]=Math.max(candies[i],candies[i+1]+1);
    }
}
let res=candies.reduce((acc,curr)=>acc+curr);
return res;
};