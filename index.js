// 1) написати функцію, яка повертає слово 'odd' або 'even', в залежності від прийнятого аргументу(число).
// Значення для перевірки функції вводить користувач.

const userInputNumber = prompt("Enter number");
console.log(userInputNumber);

/**
 * 
 * @param {Number} val1 
 * @param {Number} val2 
 * @returns {string}
 */
const checkInputUSerNumber = function (val1, val2) {
  if (val1<=5 || val2>=5 ) {
    return "odd";
  }
  return "even";
};

const userInputNumber1 = checkInputUSerNumber;
console.log(checkInputUSerNumber(userInputNumber));
