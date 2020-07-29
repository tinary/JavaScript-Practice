function isParlindrome(s) {
  let start = 0;
  let end = s.length - 1;

  while (!(start > end)) {
    if (s[start] == s[end]) {
      start++;
      end--;
    }
    else {
      return false;
    }
  }

  return true;
}

console.log(isParlindrome('madam'));
console.log(isParlindrome('racecar'));
console.log(isParlindrome('racecal'));