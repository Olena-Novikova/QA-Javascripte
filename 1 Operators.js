// ---math operators
let a = 8;
let b = 3;

//adition (+)
let c = a + b;
console.log(c);//11

// change a sign, substraction(-)
let mySimb = 12 - 6;
let num = 9* -1;
console.log(mySimb, num);// 6 -9

//multiplication (*)
let multiply = 2*6;
console.log(multiply);//12

//division (/)
let myDivision = 24/4;
console.log(myDivision);//6

//exponentiation (**)
let myExponentiation = 3**3;
console.log(myExponentiation);//27

//moduls, reminder of devision (even, odd numbers) (%)
let remainder = 8%3;
console.log(remainder);//2

//increment & decrement (++ --)
let myNum = 10;
++myNum
//myNum++
console.log("Number is " + myNum);//11
--myNum
console.log("Number is " + myNum);//10

//---logical operators
// || (or) &&(and) !(no) 
let massaKg = 70;
console.log(massaKg > 50 || massaKg > 90);// true
console.log(massaKg > 50 && massaKg > 90);// false
console.log(!massaKg > 50);// false

//---Changing  data types
// to number
let k = "3";
console.log(k, typeof k); //3 string
console.log(k, typeof +k); //3 number
console.log(k, typeof k); //3 string

let strToNumber = Number(k);
console.log(strToNumber, typeof strToNumber); //3 number

let str8 = "8";
let summa = str8 + 4;
console.log(summa, typeof summa); //84 string

//to string
let q = 9;
console.log(q, typeof q); //9 number
let q1 = String(q);
console.log(q1, typeof q1); //9 string

//--conditional statements 
// if and flowcharts

//example 1
let z = 10;
let x = 3;
let resalt;

if(z > x){
    console.log("z = " + z, "x = " + x)
    resalt = "z is bigger"
    //console.log(resalt)
}
else {
    console.log("z = " + z, "x = " + x)
    resalt = "z is smaller"
    //console.log(resalt)
}
console.log(resalt);

//example 2
let login = "myLogin";
let pass = 1234;

 if(login = "myLogin" && pass == 1234){
    console.log("Click submint") 
}
else {
    console.log("Invalid crendentials")
}

//example 3

let a1 = 5;
let b1 = 4;

let operator = "*";
let resalt1;

if(operator == "*"){
    resalt1 = a1 * b1
    console.log("Your result is " + resalt1)
}

//--Practice
let num1 = 7;
let num2 = 777;
console.log(num1 + num2);

//--Not for VS Code
//let num1 = +prompt("Enter number1");
//let num2 = 777;
//console.log(num1 + num2);

//let num1 = +prompt("Enter number1", 10);
//let num2 = 777;
//console.log(num1 + num2);

//let num1 = +prompt("Enter number1", 10);
//let num2 = Number(prompt("Enter number1", 34));
//console.log(num1 + num2);


//   https://jsbin.com/miqezupepi/2/edit?j//let num1 = +prompt("Enter number1", 10);
// let num2 = Number(prompt("Enter number1", 15));
// let operator = prompt("Select option:\n1. Summa+ \n2. Difference- \n3. Multiplay* \n4.Reminder% \n5. Increment++ \n6. Decrement--", 3);
// if(operator === "1"){console.log("Summa is ", num1 + num2);}
// else if(operator === "2"){console.log("Difference is ", num1 - num2);}
// else if(operator === "3"){console.log("Multiplay is ", num1 * num2);}
// else if(operator === "4"){console.log("Reminder is ", num1 % num2);}
// else if(operator === "5"){console.log("Incriment is ", ++num1, ++num2);}
// else if(operator === "6"){console.log("Decriment is ", --num1, --num2);}

let ammountOfTicket = 4, price = 300, age
totalSum = ammountOfTicket * price
console.log("Total summ is", totalSum);

let a11 = 2*(3-1);
let b11 = 6-2;
console.log(a11 > b11);//false

let c1 = 5*(7-4);
let d = 1+2+7;
console.log(c1, d, c1 > d);//15 10 true

let x1 = 2**4;
let y1 = 4**2;
console.log(x1 != y1);//false

let str = 'Hello students!';
console.log(str.length)//15
console.log(str[0], str[str.length-3], str[14])//H t !


 





