class Solution {
    partition(arr, low, high) {
        // Starting wirh First element as a pivot
        // let pivot=arr[low];
        // let cnt=0;
        // for(let i=low+1;i<=high;i++){
        //     if(arr[i]<=pivot) cnt++;
        // }
        // let pivotIndex = low+cnt;
        // let i=low;
        // let j=high;
        // [arr[pivotIndex],arr[low]]=[arr[low],arr[pivotIndex]];
        // while(i<pivotIndex && j>pivotIndex){
        //     while(arr[i]<=pivot)i++;
        //     while(arr[j]>pivot)j--;
            
        //     if(i<pivotIndex && j>pivotIndex){
        //         [arr[i],arr[j]]=[arr[j],arr[i]];
        //     }
            
        // }
        // return pivotIndex;
        
        // Selecting last element as  a pivot 
        let pivot=arr[high];
        let cnt=0;
        for(let i=low;i<high;i++){
            if(arr[i]<=pivot) cnt++;
        }
        let pivotIndex = low+cnt;
        let i=low;
        let j=high;
        [arr[pivotIndex],arr[high]]=[arr[high],arr[pivotIndex]];
        while(i<pivotIndex && j>pivotIndex){
            while(arr[i]<=pivot)i++;
            while(arr[j]>pivot)j--;
            
            if(i<pivotIndex && j>pivotIndex){
                [arr[i],arr[j]]=[arr[j],arr[i]];
            }
            
        }
        return pivotIndex;
        // code here
        
        
        
    }

    quickSort(arr, low, high) {
        if(low>=high){
            return;
        }
        
        let p=this.partition(arr,low,high);
        this.quickSort(arr,low,p-1);
        this.quickSort(arr,p+1,high);
        // code here
    }
}
