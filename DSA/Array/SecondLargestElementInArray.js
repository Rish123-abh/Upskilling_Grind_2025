class Solution {
    getSecondLargest(arr) {
        // code here
        let secondLargest=-Infinity;
        let largest=-Infinity;
        
        for(let num of arr){
            if(num>largest){
                secondLargest=largest;
                largest=num;
            }
            if(num<largest && num>secondLargest){
                secondLargest=num;
            }
            
    }
        return secondLargest===(-Infinity)?-1:secondLargest;
}}