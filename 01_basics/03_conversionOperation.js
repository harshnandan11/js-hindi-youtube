let score = undefined;

console.log(typeof score)
console.log(typeof (score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

// "33" ->  33
// "33abc" -> NaN
// true -> 1, false -> 0

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 -> true, 0 -> false
// "" -> false
// "Harsh" -> true

let someNumber = 33

let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//***************** Operations ********************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+3)
// console.log(3-2)
// console.log(2*3)
// console.log(2/3)
// console.log(3**2)
// console.log(2%3)

let str1 = "Harsh"
let str2 = " Mahajan"
console.log(str1 + str2);

console.log("1" + 2); //12
console.log(1 + "2"); //12
console.log("1" + 2 + 2); //122
console.log(1 + 2 + "2"); //32 😱

console.log(true); //true
console.log(+true); //1
console.log(+""); //0

let num1, num2, num3
num1 = num2 = num3 = 2+2; //Not at all a good practice

let gameCounter = 100
console.log(gameCounter++); //101 (postfix-operation)
console.log(++gameCounter); //100 (prefix-operation)









