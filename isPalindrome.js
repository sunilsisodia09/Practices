function isPalindrome(str){
  return str === str.split("").reverse("").join("");
}

// const result = isPalindrome("hello");
const result = isPalindrome("mam");
console.log(result);