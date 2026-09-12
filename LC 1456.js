// lc 1456

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function (s, k) {
    let left = 0;
    let cnt = 0;
    let mxCnt = 0;

    let vowel = "aeiou"

    for (let right = 0; right < s.length; right++) {
        if (vowel.includes(s[right])) {
            cnt++;
        }

        if (right - left + 1 === k) {
            mxCnt = Math.max(mxCnt, cnt);
            if (vowel.includes(s[left])) {
                cnt--;
            }
            left++;
        }
    }

    return mxCnt;
};