let total = 0;
let input = null;
let numbers = [];

while ((input = prompt("Enter any NUMBER:")) !== null) {
  if (isNaN(Number.parseInt(input))) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers.push(Number.parseInt(input));
  }
}

if (numbers.length === 0) {
  console.log("Числа не были введены");
} else {
  for (const num of numbers) {
    total += num;
  }
  console.log(`Общая сумма чисел равна ${total}`);
}
