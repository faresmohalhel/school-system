// q1
const isPresent = function (array, value) {
  if (array.includes(value)) return value;
  else return -1;
};

// q2
const findMissingNumber = function (array) {
  array.sort((a, b) => a - b);
  return (
    array.filter((value, index) => {
      if (index === array.length - 1) {
        return false;
      }
      if (value + 1 !== array[index + 1]) return value;
    })[0] + 1
  );
};

// ** alt answer for q2
const findMissingNumberAltAnswer = function (array) {
  array.sort((a, b) => a - b);
  let answer;
  for (let i = 0; i < array.length; i++) {
    if (i === array.length) continue;
    if (array[i] + 1 !== array[i + 1]) {
      console.log(array[i], array[i + 1]);
      answer = array[i] + 1;
      return answer;
    }
  }
};

// q3
const removeDuplicates = function (array) {
  return Array.from(new Set(Array));
};

// q4
const avg = function (array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum / array.length;
};

// q5 as of 23/3/2023
const powerOfTwo = function (array) {
  return array.map((element, index) => Math.pow(2, element));
};

// q6
const evenOrOdd = function (array) {
  return array.map((element, index) => {
    if (typeof element !== "number") return "N/A";
    return element % 2 === 0 ? "even" : "odd";
  });
};

// q7
const fizzBuzz = function (array) {
  return array.map((element, index) => {
    if (element % 3 === 0 && element % 5 === 0) {
      return "Fizz Buzz";
    } else if (element % 3 === 0 && element % 5 !== 0) {
      return "Fizz";
    } else if (element % 3 !== 0 && element % 5 === 0) {
      return "Buzz";
    } else {
      return element;
    }
  });
};
