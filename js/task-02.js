logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

function logItems(inArray) {
  for (let item = 0; item < inArray.length; item++) {
    console.log(`${item + 1} - ${inArray[item]}`);
  }
}
