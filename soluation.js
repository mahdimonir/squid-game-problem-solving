// 1. Reverse a String
function reverseString(s) {
  let reversed = "";
  for (let i = s.length - 1; i >= 0; i--) {
    reversed += s[i];
  }
  return reversed;
}

// 2. FizzBuzz
function fizzBuzz(n) {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i.toString());
    }
  }

  return result;
}

// 3. Largest Number
function findLargest(nums) {
  if (nums.length === 0) return null;

  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  return max;
}

// 4. Palindrome
function isPalindrome(s) {
  s = s.toLowerCase();

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
}

// 5. Count Vowels
function countVowels(s) {
  let count = 0;
  const vowels = "aeiou";

  s = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      count++;
    }
  }

  return count;
}

// 6. Factorial
function factorial(n) {
  if (n === 0) return 1;

  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

// 7. Even Numbers
function getEvenNumbers(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      result.push(nums[i]);
    }
  }

  return result;
}

// 8. Fibonacci
function fibonacci(n) {
  if (n === 0) return [];
  if (n === 1) return [0];

  const result = [0, 1];

  for (let i = 2; i < n; i++) {
    const next = result[i - 1] + result[i - 2];
    result.push(next);
  }

  return result;
}

// 9. Minimum Number
function findMinimum(nums) {
  let min = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
  }

  return min;
}

// 10. Remove Duplicates
function removeDuplicates(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (!result.includes(nums[i])) {
      result.push(nums[i]);
    }
  }

  return result;
}
