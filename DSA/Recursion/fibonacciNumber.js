
/**
 * @param {number} n
 * @return {number}
 */
 function fibonaccii(n){
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    return fibonaccii(n-2)+fibonaccii(n-1);
 }
var fib = function(n) {
    return fibonaccii(n)
};