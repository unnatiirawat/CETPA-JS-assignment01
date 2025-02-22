/*Your school has the following grading system based upon the marks (M) obtained by a student:
 If M≤10, the grade will be E.
 If 11≥M≤20, the grade will be D.
 If 21≥M≤30, the grade will be C.
 If 31≥M≤40, the grade will be B.
 If 41≥M≤50, the grade will be A.
Your friend will enter his marks out of 5050, and your task is to print his grades using a switch statement.
Note: You have to complete findGrades function. */

//    const marks = prompt("Enter the marks");
//    let grade;
//    switch (true) {
//     case marks >= 41 && marks <= 50:
//         grade = "A";
//              break;
//     case marks >= 31 && marks <= 40:
//         grade = "B";
//         break;
//         case marks >= 21 && marks <= 30:
//         grade = "C";
//         break;
//         case marks >= 11 && marks <= 20:
//         grade = "D";
//         break;
//         case marks >= 0 && marks <= 10:
//         grade = "E";
//         break;
   
//     default:
//         grade = "invalid marks"
        
//    }
//    console.log(grade);
 

/*QUE 2 You are provided with a table containing some characters and their corresponding values. Your task will be to find the value from the 
table corresponding to an input character and return it.
| P or p - PrepBytes |
| Z or z - Zenith |
| E or e - Expert Coder |
| D or d - Data Structure | */

// let input = prompt("Enter the character") ;
// let ch = {
//     P: "Prepbyte", p: "Prepbyte",
//     Z: " Zenith", z: "Zenith",
//     E: "Expert Coder" , e: "Expert Coder",
//      D: "Data Structure" , d: "Data Structure",
// }
// let result = (ch[input] || "Invalid value");
// console.log(result);


/* QUE3 Take three numbers and print the largest number among them if all of three are same print −1−1.
Note: You have to complete Max_out_of_three. */

// let a  = parseInt(prompt("Enter the numbers"));
// let  b   = parseInt(prompt("Enter the numbers"));
// let  c  = parseInt(prompt("Enter the numbers"));

// var max ;
  
// if( a===b && b===a){
//     max =("all numbers are same");
// }
// else if(a>= b && a>= c){
//     max = a;

// }else if(b>= a && b>= c){
//     max = b;
// } else{
//     max = c;
// }
// console.log( "the largest number is "  + max);

//   QUE 4 You are given 33 distinct integers X, Y and Z and your task is to find and return the second smallest integer among the three provided integers.
// Note: You have to complete findSndSmallest function. 

let x = 4, y = 5 , z = 78;

let smallestvalue;
if(x<=y && x<=z){
    smallestvalue = x;
}
else if(y<= x && y<=z){
    smallestvalue = y;
}
else{
    smallestvalue = z;
}
console.log("smallest value between (4, 5 , 78) is " + smallestvalue);

// Q5. Check whether the triangle is Acute or Obtuse 

function traingle(x,y,z) 
{
 
     if (x>90 || y>90 || z>90)
    console.log("Obtuse");
    else
    console.log("Acute");
}
console.log(traingle(90,90,120))
