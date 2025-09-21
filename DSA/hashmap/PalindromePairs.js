/**
 * @param {string[]} words
 * @return {number[][]}
 */

 
    class Trie{
        constructor(){
            this.children=Array(26).fill(null);
            this.index=-1; // This will use to end marking of string
        }

    }
    // This is used to build a trie and mark the word with ending 
    function insert(root,word,index){
        let curr=root;
        for(let j=word.length-1;j>=0;j--){
        let idx=word[j].charCodeAt(0)-'a'.charCodeAt(0);
        if(curr.children[idx]===null){
            curr.children[idx]=new Trie();
        }
        curr=curr.children[idx];
        }
        curr.index=index;
    }
    function  isPalindrome(word, left, right){
    while (left < right) {
        if (word[left] !== word[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

    function helper(curr,palindromes,str,ind){
            // base case 
            // Reached at end 
            if(curr.index!=-1 && curr.index!==ind){
                if(isPalindrome(str,0,str.length-1)){
                    palindromes.push([ind,curr.index]);
                    // palindromes.push(curr.index);
                    // palindromes.push(ind);
                }
            }

            // recursion 
            for(let i=0;i<26;i++){
                if(curr.children[i]!=null){
                    const char=String.fromCharCode('a'.charCodeAt(0)+i);
                    helper(curr.children[i],palindromes,str+char,ind)
                }
            }

    }

    function search(root,word,ind){
        let curr=root;
        let palindromes=[];
        for(let i=0;i<word.length;i++){
        let idx=word[i].charCodeAt(0)-'a'.charCodeAt(0);

            if(curr.index!=-1 && curr.index!==ind){
                // Reached to end of string in trie now need to check for remaining wword whether it is palindrome or not 
        let flag=true;
                let start=i;
                let end=word.length-1;
                flag=isPalindrome(word,start,end);
                if(flag){
                    // Then it is Palindrome and statisfying condition and will store the answer 
                    palindromes.push([ind,curr.index]);
                    // palindromes.push(curr.index);
                    // palindromes.push(ind);
                }
            }
            // it will check whether char is in string or not 
            if(curr.children[idx]===null){
                return palindromes;
            }
                curr=curr.children[idx];
        }
        // Think of case 2 where word is smaller then word in trie 

        helper(curr,palindromes,"",ind);
        return palindromes;

    }

var palindromePairs = function(words) {
    // Need to use of trie to keep track of string 
    // We will iterate through each word and store it in reverse order in trie 
    // then will iterate again and will check whether it is present in trie

    let root=new Trie();
    // Trie Creation done for each word in reverse order 
    for(let i=0;i<words.length;i++){
        insert(root,words[i],i);
    }


    // Now will check for two case 

    // Case1 -> When Word is greater then string Present in trie
    let ans=[];
    for(let i=0;i<words.length;i++){
    ans.push(...search(root,words[i],i));
    }
    return ans; 

};