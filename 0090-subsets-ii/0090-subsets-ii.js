/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res=[]
     nums.sort((a, b) => a - b);
function bt(s,current){
    res.push([...current])
    for(let i=s;i<nums.length;i++){
         if (i > s && nums[i] === nums[i - 1]) {
                continue;
            }
        current.push(nums[i])
        bt(i+1,current)
        current.pop()
    }
}
    bt(0,[])
return res  
};