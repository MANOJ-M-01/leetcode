// https://leetcode.com/problems/longest-palindromic-substring/
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let solution = [];
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        let j = i, k = i;
        let pal = true;
        while (j >= 0 && k < s.length) {
            if (s[j] == s[k]) {
                if (max < k - j + 1) {
                    max = k - j + 1;
                    solution = [j, k]
                }
                j--;
                k++;
            } else {
                break
            }
        }
        j = i, k = i + 1;
        while (j >= 0 && k < s.length) {
            if (s[j] == s[k]) {
                if (max < k - j + 1) {
                    max = k - j + 1;
                    solution = [j, k]
                }
                j--;
                k++;
            } else {
                break
            }
        }
    }
    let ans = ""
    for (let i = solution[0]; i <= solution[1]; i++) {
        ans += s[i]
    }
    return ans
};




// my notes


// Time limit exceet for long input
/**
 * @param {string} s
 * @return {string}
 */
const revStr = (str) => {
    return str.split("").reverse().join("");
}
var longestPalindrome = function (s) {
    let len = s.length;
    for (let i = len; i > 0; i--) {
        let limit = len - i + 1;
        for (j = 0; j <= limit - 1; j++) {
            let slen = j + i
            let pal = s.slice(j, slen);
            if (pal == revStr(pal)) {
                return pal;
            }
        }
    }
};

/*
Input: s = "babad"
Output: "bab"
Input: s = "cbbd"
Output: "bb"
*/
let s = "babad"
// s = "cbbd"
// s = "a"
sd = "ibvjkmpyzsifuxcabqqpahjdeuzaybqsrsmbfplxycsafogotliyvhxjtkrbzqxlyfwujzhkdafhebvsdhkkdbhlhmaoxmbkqiwiusngkbdhlvxdyvnjrzvxmukvdfobzlmvnbnilnsyrgoygfdzjlymhprcpxsnxpcafctikxxybcusgjwmfklkffehbvlhvxfiddznwumxosomfbgxoruoqrhezgsgidgcfzbtdftjxeahriirqgxbhicoxavquhbkaomrroghdnfkknyigsluqebaqrtcwgmlnvmxoagisdmsokeznjsnwpxygjjptvyjjkbmkxvlivinmpnpxgmmorkasebngirckqcawgevljplkkgextudqaodwqmfljljhrujoerycoojwwgtklypicgkyaboqjfivbeqdlonxeidgxsyzugkntoevwfuxovazcyayvwbcqswzhytlmtmrtwpikgacnpkbwgfmpavzyjoxughwhvlsxsgttbcyrlkaarngeoaldsdtjncivhcfsaohmdhgbwkuemcembmlwbwquxfaiukoqvzmgoeppieztdacvwngbkcxknbytvztodbfnjhbtwpjlzuajnlzfmmujhcggpdcwdquutdiubgcvnxvgspmfumeqrofewynizvynavjzkbpkuxxvkjujectdyfwygnfsukvzflcuxxzvxzravzznpxttduajhbsyiywpqunnarabcroljwcbdydagachbobkcvudkoddldaucwruobfylfhyvjuynjrosxczgjwudpxaqwnboxgxybnngxxhibesiaxkicinikzzmonftqkcudlzfzutplbycejmkpxcygsafzkgudy"
console.log(longestPalindrome(s));
