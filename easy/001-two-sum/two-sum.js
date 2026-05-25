function twoSum(nums, target) {
  const numMap = {};
  for(let i = 0; i < nums.length; i++) {
    const number = nums[i];
    const expected = target - number;
    if (numMap[expected] !== undefined) {
      return [numMap[expected], i];
    }
    numMap[number] = i;
  }
}

// Tests
console.log(twoSum([3,2,4], 6));
