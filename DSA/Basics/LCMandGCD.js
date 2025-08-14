// Problem Link-> https://www.geeksforgeeks.org/problems/lcm-and-gcd4516/1

// Approach
// GCD cannot be more than min of 2 numbers from 1 to min number find the max value which can divide the both numbers 
// use formula LCM*HCF=a*b

class Solution {
    /**
    * @param number a
    * @param number b

    * @returns number[]
    */
    lcmAndGcd(a, b) {
    let INT_MIN = -(2**31);
        // code here
        let gcd=INT_MIN;
        for(let i=1;i<=(Math.min(a,b));i++){
            if(a%i==0 && b%i==0){
                gcd=Math.max(gcd,i);
            }
        }
        let lcm=Math.floor((a*b)/gcd);
        
        return [lcm,gcd];
    }
}
