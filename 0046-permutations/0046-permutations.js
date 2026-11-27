/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  
 let res=[]
 function bt(current,used){
        if(current.length===nums.length){
        res.push([...current])
        return
    }
 for(let i=0;i<nums.length;i++){

    
    if(used[i]) continue

    used[i]=true
    current.push(nums[i])
    bt(current,used)
    current.pop()
    used[i]=false


 }
 }
 bt([],[])
 return res
};