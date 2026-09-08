var findMaxAverage = function (nums, k) {
    if (nums.length == 1) return nums[0];

    let mxSum = -Infinity;
    for (let i = 0; i < nums.length - k + 1; i++) {
        let sum = 0;
        for (let j = i; j < i + k; j++) {
            sum += nums[j];
        }
        let avg = sum / k;
        mxSum = Math.max(avg, mxSum);
    }

    return mxSum;

};