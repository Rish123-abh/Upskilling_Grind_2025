/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    // let temp=s.trim().split(" ");
    // let res=temp.filter((x)=> x!=='');
    // res.reverse();
    // return res.join(" ");

    // other simple way same approach
// extra space handle with regex /\s+/
    return s.trim().split(/\s+/).reverse().join(" ");

};