// Iteration #1: Find the maximum
function maxOfTwoNumbers(a, b) {

  if (a > b) { return a } else if (b > a) { return b } else if (a === b) { return b }
}



// Iteration #2: Find longest word
const words = ['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot'];

function findLongestWord(arr) {

  let longest = "";
  if (arr.length === 0) {
    return null;
  }
  arr.forEach(word => {
    word.length > longest.length ? longest = word : longest
  }
  );
  return (longest);
}



// Iteration #3: Calculate the sum
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
  let sum = 0;

  for (let number of numbers) {
    sum += number;
  }
  return sum;
}




// Iteration #4: Calculate the average
// Level 1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbersAvg) {

  if (numbersAvg.length === 0) return null;
  if (numbersAvg.length == 1) { return numbersAvg[0]; }

  let sum = 0;
  for (let numberAvg of numbersAvg) {
    sum += numberAvg;
  }

  let avg = sum / numbersAvg.length;

  return avg;
}

// Level 2: Array of strings
const wordsArr = ['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace'];

function averageWordLength(wordsArr) {

  if (wordsArr.length == 0) { return null; };
  if (wordsArr.length == 1) { return wordsArr[0].length; };

  let sum = 0;

  for (wordArr of wordsArr) {

    sum += wordArr.length;

  }

  let result = sum / wordsArr.length;

  return result;

}

// Bonus - Iteration #4.1
function avg() { }

// Iteration #5: Unique arrays
const wordsUnique = [
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
];

function uniquifyArray(values) {

  if (values.length == 0) { return null; };

  let unique = [...new Set(values)];

  return unique;

}



// Iteration #6: Find elements
const wordsFind = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

doesWordExist(['machine', 'poison', 'eat', 'apple', 'horse'], 'ratatouille')

function doesWordExist(values, filter) {

  if (values.length == 0) return null;

  let ret = values.includes(filter);

  return ret;
}



// Iteration #7: Count repetition
const wordsCount = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];


function howManyTimes(values, filter) {

  let count = 0;
  if (!values.length || !values.includes(filter)) {
    return 0;
  }
  values.forEach(element => {
    if (element === filter) {
      count += 1;
    }
  })

  return count;
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    maxOfTwoNumbers,
    findLongestWord,
    sumNumbers,
    sum,
    averageNumbers,
    averageWordLength,
    avg,
    uniquifyArray,
    doesWordExist,
    howManyTimes,
    greatestProduct
  };
}
