// 1 Description:
// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, 
// he drinks 0.5 litres of water per hour of cycling.
// You get given the time in hours and you need to return 
// the number of litres Nathan will drink, rounded to the smallest value.

// function litres(time) {
//     return Math.floor(time * 0.5);
//   }

let time = 10;
let litters = Math.floor(time * 0.5);
console.log(litters);

//  2 Description:
// Each floating-point number should be formatted that only the first two decimal places are returned. 
// You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
// Don't round the numbers! Just cut them after two decimal places!
// Right examples:  
// 32.8493 is 32.84  
// 14.3286 is 14.32
// Incorrect examples (e.g. if you round the numbers):  
// 32.8493 is 32.85  
// 14.3286 is 14.33

// function twoDecimalPlaces(number) {
//     return Math.trunc(number * 100) / 100;
//   }

var number = 10.1289767789; 
let result = Math.trunc(number * 100) / 100; 
console.log(result); 

// 3 Description:
// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".
// If your language supports it, try using a switch statement.

let a =  1;
switch(a){
  case 0:
    console.log('zero')
break;
case 1:
    console.log('one')
break;
case 2:
    console.log('two')
break;
case 3:
    console.log('three')
break;
case 4:
    console.log('four')
break;
case 5:
    console.log('five')
break;
case 6:
    console.log('six')
break;
case 7:
    console.log('seven')
break;
case 8:
    console.log('eight')
break;
case 9:
    console.log('nine')
break;
default:
        console.log("Invalid input")
};

// 4 Description:
// You are given the length and width of a 4-sided polygon. 
// The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.
// Example(Input1, Input2 --> Output):
// 6, 10 --> 32
// 3, 3 --> 9
// Note: for the purposes of this kata you will assume that it is a square 
// if its length and width are equal, otherwise it is a rectangle.

// const areaOrPerimeter = function(l , w) {
//     if(l === w){
//       return(l * w)
//     } else {
//       return (l + w) * 2}
//   };

let z = 8;
let x = 7;

if(z === x){
console.log(z * x);
} else {
    console.log((z + x) * 2);
};


  
// 5 Description:
// Philip's just turned four and he wants to know how old he will be in various years in the future 
// such as 2090 or 3044. His parents can't keep up calculating this so they've begged you 
// to help them out by writing a programme that can answer Philip's endless questions.
// Your task is to write a function that takes two parameters: 
// the year of birth and the year to count years in relation to.
//  As Philip is getting more curious every day he may soon want to know 
//  how many years it was until he would be born, 
// so your function needs to work with both dates in the future and in the past.
// Provide output in this format: For dates in the future: "You are ... year(s) old." 
// For dates in the past: "You will be born in ... year(s)." 
// If the year of birth equals the year requested return: "You were born this very year!"
// "..." are to be replaced by the number, followed and proceeded by a single space. 
// Mind that you need to account for both "year" and "years", depending on the result.
// Good Luck!

// function  calculateAge(birthYear,year) {
//     age = year-birthYear;
//     if(age==1)
//       return "You are 1 year old.";
//     else if(age===-1)
//       return "You will be born in 1 year."
//     else if(age>0)
//       return "You are " + age + " years old.";
//     else if(age<0) {
//       age = birthYear-year;
//       return  "You will be born in " + age + " years."
//     }
//     else {
//       return "You were born this very year!";
//     }
//  }

let birthYear = 2017, targetYear = 2011;
let age = targetYear - birthYear;

if (age> 0) {
          // If the target year is in the future
          if (age === 1) {
            console.log('You are', age, 'year old.'); // Example: "You are 1 year old."
          } else {
           console.log('You are', age, 'years old.'); // Example: "You are 5 years old."
          }
        } else if (age < 0) {
          // If the target year is in the past
          let age1 = Math.abs(age);
          if (age1 === 1) {
            console.log('You will be born in', age1, 'year.'); // Example: "You will be born in 1 year."
          } else {
            console.log('You will be born in', age1, 'years.'); // Example: "You will be born in 10 years."
          }
        } else {
          // If the target year is the same as the birth year
          console.log(`You were born this very year!`); // Example: "You were born this very year!"
        }
      
        // Complete the function so that it finds the average of the three scores passed to it
        // and returns the letter value associated with that grade.
        // Numerical Score	Letter Grade
        // 90 <= score <= 100	'A'
        // 80 <= score < 90	'B'
        // 70 <= score < 80	'C'
        // 60 <= score < 70	'D'
        // 0 <= score < 60	'F'
        // Tested values are all between 0 and 100. 
        // Theres is no need to check for negative values or values greater than 100.

let s1 = 111, s2 = 110, s3 = 89;
let average = (s1 + s2 + s3) / 3;
console.log(average)

if(  average >= 90 && average <= 100) {console.log('A' );}
else if (  average >= 80 && average < 90 ) {console.log('B')}
else if( average >= 70 && average < 80){console.log('C')}
else if(average >= 60 && average < 70){console.log('D')}
else if(average > 0 && average < 60){console.log('F')}

// In this kata you will have to write a function that takes litres and pricePerLitre (in dollar) as arguments.
// Purchases of 2 or more litres get a discount of 5 cents per litre, purchases of 4 or more litres 
// get a discount of 10 cents per litre, and so on every two litres, up to a maximum discount of 25 cents per litre. But total discount per litre cannot be more than 25 cents. Return the total cost rounded to 2 decimal places. Also you can guess that there will not be negative or non-numeric inputs.
// Note
// 1 Dollar = 100 Cents

let litres = 17;
let pricePerLitre = 1;
let discount;

if (litres >= 10) {
    discount = 0.25; 
  } else if (litres >= 8) {
    discount = 0.20; 
  } else if (litres >= 6) {
    discount = 0.15; 
  } else if (litres >= 4) {
    discount = 0.10; 
  } else if (litres >= 2) {
    discount = 0.05; 
  }

  let totalCost = litres * (pricePerLitre - discount);
  console.log(+totalCost.toFixed(2));

//   Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son 
// (or in how many years he will be twice as old). 
// The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

  let fatherAge = 55, sonAge = 30;
  let twiceSonAge = 2 * sonAge;

  if (fatherAge > twiceSonAge) {
    console.log(fatherAge - twiceSonAge);
  } else {
    console.log(twiceSonAge - fatherAge);
  }

// The male gametes or sperm cells in humans and other mammals are heterogametic and
// contain one of two types of sex chromosomes. They are either X or Y. 
// The female gametes or eggs however, contain only the X sex chromosome and are homogametic.
// The sperm cell determines the sex of an individual in this case. 
// If a sperm cell containing an X chromosome fertilizes an egg, 
// the resulting zygote will be XX or female. If the sperm cell contains a Y chromosome, 
// then the resulting zygote will be XY or male.
// Determine if the sex of the offspring will be male or female based on the X or Y chromosome 
// present in the male's sperm.
// If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; 
// If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
let sperm  = 'XY';

if (sperm === 'XX') {
    console.log ("Congratulations! You're going to have a daughter.");
  } else if (sperm === 'XY') {
    console.log ("Congratulations! You're going to have a son.");
  }

//   function drawingEdge(n) {
//     const modulo = 1000000007;
//     const edges = (n * (n - 1)) / 2;
    
//     // Функция для быстрого возведения в степень
//     let result = 1;
//     let base = 2;
//     let exp = edges;

//     while (exp > 0) {
//         if (exp % 2 === 1) {
//             result = (result * base) % modulo;
//         }
//         base = (base * base) % modulo;
//         exp = Math.floor(exp / 2);
//     }
   
//     return result;
// }
// function drawingEdge(n) {
//   const edges = (n * (n - 1)) / 2;
//   return Math.pow(2, edges);
//  }

// console.log(drawingEdge(3))
// console.log(drawingEdge(991))

function drawingEdge(n) {
  const modulo = 1000000007;
  
  // Рассчитываем количество рёбер
  const edges = (n * (n - 1)) / 2;

  // Функция для быстрого возведения в степень с модулем
  let result = 1;
  let base = 2;
  let exp = edges;

  while (exp > 0) {
      if (exp % 2 === 1) {
          result = (result * base) % modulo;
      }
      base = (base * base) % modulo;
      exp = Math.floor(exp / 2);
  }

  return result;
}

// Примеры вызовов
console.log(drawingEdge(991));  // Ожидаемый вывод: 948726690