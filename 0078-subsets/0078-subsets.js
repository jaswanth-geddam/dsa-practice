/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
let res=[]
function bt(s,current){
    res.push([...current])
    for(let i=s;i<nums.length;i++){
        current.push(nums[i])
        bt(i+1,current)
        current.pop()
    }
}
    bt(0,[])
return res    
};