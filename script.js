// 1 - Vazifa
const fruits = ["olma", "banan", "uzum", "anor", "shaftoli"];
fruits.forEach(fruit => console.log(fruit.toUpperCase()));

// 2 - Vazifa
const largest = Math.max(...fruits.map(fruit => fruit.length));
const smallest = Math.min(...fruits.map(fruit => fruit.length));
console.log("Eng katta element:", largest);
console.log("Eng kichik element:", smallest);

// 3 - Vazifa
const numbers = [2, 4, 6, 8, 10];
const evenSum = numbers.filter(num => num % 2 === 0).reduce((sum, num) => sum + num, 0);
console.log("Massivdagi juft sonlar yeg'indisi:", evenSum);

// 4 - Vazifa
console.log("Teskari tartibda:", fruits.reverse());

// 5 - Vazifa
const mixedArray = ['salom', 2, true, 'hi', 'hello', 'ok', null, 232];
const stringArray = mixedArray.filter(element => typeof element === 'string');
console.log("Yangi string array:", stringArray);

// 6 - Vazifa
const arr = [3, 5, 7, 2, 4];
const avg = arr.reduce((sum, num) => sum + num, 0) / arr.length;
console.log("Sonlarning o'rta arifmetigi:", avg);

// 7 - Vazifa
const product = arr.reduce((prod, num) => prod * num, 1);
console.log("Massivdagi sonlar ko'paytmasi:", product);

// 8 - Vazifa
const oddAvg = arr.filter(num => num % 2 !== 0).reduce((sum, num, _, filteredArr) => sum + num / filteredArr.length, 0);
console.log("Toq sonlar ko'paytmasi:", oddAvg);
