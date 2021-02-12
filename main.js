//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function (num) {
let x=0;
  for(let i = 0; i<=num; i++){
   x += i
  }
  return x
}

//  5kyu: Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

let moveZeros = function (arr) {
   zeros = arr.filter(element=>element === 0)
   x = arr.filter(element=>element !== 0)
    return x.concat(zeros);
}

// 8kyu: Complete the square sum function so that it squares each number passed into it and then sums the results together.
//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){
   let x =  numbers.map(element =>  element**2)
   x = x.reduce((passedIn, item) => {
    return passedIn+ item;
   }, 0)
   return x
}

// 8kyu: Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present). First code is mine, second is from codewars
function countSheeps(arrayOfSheep) {
    let x = 0;
    for(let i = 0; i<arrayOfSheep.length;i++){
       if(arrayOfSheep[i] === true){
           x++
       };
    }
    return x
}

sheep = [true, false, true, true, false, false]
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean);
}

// 8kyu: Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling. You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
    let litres = .5
    let waterDrank = Math.floor(time*litres)
  return waterDrank;
}

// 8kyu: Create a fancy "hello world!" function
let greet = _ => "Hello world";

//8kyu: Your task is to create a function that does four basic mathematical operations. The function should take three arguments - operation(string/char), value1(number), value2(number). The function should return result of numbers after applying the chosen operation.

function basicOp(operation, value1, value2){
  return eval(value1 + operation +value2)
}

