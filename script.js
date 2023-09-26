function threeSum(arr, target) {
// write your code here
	arr.sort((a, b) => a - b);

  let closestSum = arr[0] + arr[1] + arr[2]; // Initialize with the sum of the first three elements

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const currentSum = arr[i] + arr[left] + arr[right];

      // Check if the current sum is closer to the target than the previously closest sum
      if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
        closestSum = currentSum;
      }

      // Adjust the pointers based on the comparison with the target
      if (currentSum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;
