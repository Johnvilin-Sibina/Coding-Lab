//Find whether the given number is armstrong and print armstrong if it an armstrong number else print not an armstrong.
//Solution:
let num = 153;
var curr_num = num;
let sum = 0;
let count = 0;
while(curr_num>=1){
    curr_num=curr_num/10;
    count++;
}
var curr_num=num;

while(curr_num>=1){
let digit = curr_num%10;
 curr_num = Math.floor(curr_num/10);
 sum = sum + Math.pow(digit,count);
}

if(num==sum){
    console.log("Armstrong Number");
}
else{
    console.log("Not an Armstrong number")
}
