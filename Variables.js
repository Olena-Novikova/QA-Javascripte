 console.log(`Hello World`)

let firstName;
let lastName;
firstName = `John`;
lastName = `Adams`;
console.log(firstName, lastName);
// Output John Adams
firstName = `Anna`;
lastName = `Karenina`;
console.log(firstName, lastName);
// Output John Adams
//        Anna Karenina

//2 Display the data type of the following variables in the console:
let a;                                                                                                                                          
let c = 9;                                                                                                                                   
let str = `Hi 5!`;                                                                                                                       
let b = true;                                                                                                                             
let y = 9 + `1` ;                                                                                                                        
let x =  'a' / 6;

console.log(typeof a, a);      // undefined undefined
console.log(typeof c, c);      // number 9rin
console.log(typeof str, str);  // stg Hi 5!
console.log(typeof b, b);      // boolean true
console.log(typeof y, y);      // string 91
console.log(typeof x, x);      // number NaN

//3. Which variables are logical to declare using const , write them down and display them on the screen

/*let a;  //The variable is not initialized and may change in the future, so let remains.
const c = 9;
const str = "Hi 5!";
const b = true;
const y = 9 + '1'; 
let x = 'a' / 6; //The result of the expression will be NaN.
//Usually such variables are declared using let, as further changes may be required.*/

//4 Write a step-by-step algorithm for making coffee and output it to the console.
let smallCup = `small cup`;
let hotWater = `hot water`;
let price = 5;
let latte = `Latte`;

//Steps for coffe recipe
let step1 = `1. Take a ${smallCup} `;
let step2 = "2. Put 1 spoon of coffee in it";
let step3 = `3. Pour ${hotWater}`;
let step4 = "4. Pour milk in a cup of coffee";
let step5 = "5. Stir coffee in a cup with a spoon";
let orderPrice = `The order price is ${price}$`;
let resalt = `Enjoy your coffee!`;
console.log(step1,`\n`,step2,`\n`,step3,`\n`,step4,`\n`,step5,`\n`,orderPrice,`\n`,resalt)


//Practice

let age, city;
age = 37;
city = `Praha`;
console.log(age, city); //37 Praha

let favoriteColor, favoriteFood;
favoriteColor = `pink`;
favoriteFood = `milk`;
console.log(favoriteColor,`,`, favoriteFood); //pink , milk

let num1, num2;
num1 = 3;
num2 = 4;
let sum = num1 + num2;
console.log(sum);//7
console.log(sum*2);//14
console.log(sum/2);//3.5

let firstName1 = `Lina`, lastName1 = `Nova`, greet = `Hello,`;
console.log(greet + ` `+ firstName1 +` ` + lastName1);//Hello, Lina Nova

let age1 = 25;
let greetings = `Hello, my name is ${firstName1} ${lastName1}, I am ${age1}`;
console.log(greetings);

