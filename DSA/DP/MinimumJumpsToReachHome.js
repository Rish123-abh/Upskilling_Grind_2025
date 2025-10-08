/**
 * @param {number[]} forbidden
 * @param {number} a
 * @param {number} b
 * @param {number} x
 * @return {number}
 */
var minimumJumps = function(forbidden, a, b, x) {
    let visited=new Set();
    visited.add("0-false");
    forbidden=new Set(forbidden);
    let queue=[];
    // current position jumps ,backward
    queue.push([0,0,0]);
    while(queue.length!==0){
        let [current,jump,backward]=queue.shift();

        if(current===x){
            return jump;
        }
        // forward
        let forwardPos=current+a
        let key=`${forwardPos}-false`;
        if(forwardPos<=6000 && !forbidden.has(forwardPos) && !visited.has(key)){
        queue.push([forwardPos,jump+1,0]);
        visited.add(key); 
        }
        //backward
        if(!backward){
        let backwardPos=current-b
        let key=`${backwardPos}-true`;

        if(backwardPos>=0 && !forbidden.has(backwardPos) && !visited.has(key)){
        queue.push([backwardPos,jump+1,1]);
        visited.add(key); 
        }
        }
    }
    return -1;
};