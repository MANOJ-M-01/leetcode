//https://leetcode.com/problems/strong-password-checker-ii/

var strongPasswordCheckerII = function (password) {
    const strong = /^(?=.*\d)(?=.*[!@#$%^&*)(+-])(?=.*[a-z])(?=.*[A-Z])(?!.*([A-Za-z0-9!@#$%^&*)(+-])\1).{8,}$/;
    return strong.test(password);
};