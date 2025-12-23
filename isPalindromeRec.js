function isPalindrome(s) {
    if (s.length <= 1) {
        return true;
    }
    return s[0] === s[s.length - 1] && isPalindrome(s.slice(1, s.length - 1));
}
