
// Concept Learned -> Number,string,boolean it is pass by value and array ,obj are pass by reference 

function findsum(n){
        if(n==1){
            return 1;
        }
        return n**3+findsum(n-1);
    }

class Solution {
    /**
    * @param number n

    * @returns number
    */
    sumOfSeries(n) {
        // code here
        return findsum(n);
    }
}
