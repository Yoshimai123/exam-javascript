const username = prompt("Enter your name:");
const birthYear = parseInt(prompt("Enter your year of birth:"));

if ((birthYear % 4 === 0 && birthYear % 100 !== 0) || birthYear % 400 === 0) {
    alert(`Hello ${username}, you were born in a leap year`);
  } else {
    alert(`Hello ${username}, you were not born in a leap year`);
  }

