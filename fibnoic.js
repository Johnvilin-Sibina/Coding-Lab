// Print fibnoic series
// Solution:
let num1 = 0;
let num2 = 1;
let num3 = 0;
for(let i=0;i<10;i++){
    num3 = num1+num2;
    console.log(num3); 
    num1=num2;
    num2=num3;
}