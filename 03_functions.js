// MINIMUM

function min(num1, num2) {
  if (num1 > num2) {
    return num2;
  } else {
    return num1;
  }
};
console.log(min(0, 10));

/*
function min(a, b) {
  if (a < b) return a;
  else return b;
}
*/



// RECURSION

function isEven(num) {
  if (num == 0) {
    return true;
  } else if (num == 1) {
    return false;
  } else {
    return isEven(num - 2);
  }
}
console.log(isEven(13));

/*
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}
*/



// BEAN COUNTING

function countB (str) {
  return countChar (str, "B");
};
console.log(countB("BaBy Back riBs"));

function countChar (str, letter) {
  let char = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      char += 1;
    }
  }
  return char;
};
console.log(countChar("HeLLo letter L", "L"));

/*
function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}
*/