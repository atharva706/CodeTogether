/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function (nums, l, r) {
    let left = 0;
    let sum = 0;
    let minSum = Infinity;

    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];

        if (l <= (right - left + 1) && r >= (right - left + 1)) {
            if (sum < minSum && sum > 0) {
                minSum = sum;
            }
            sum -= nums[left];
            left++;
        }
    }

    if (minSum < 0) {
        return -1;
    }
    else {
        return minSum;
    }

};