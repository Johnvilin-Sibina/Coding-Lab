// Find whether the given number is a spy number
//Solution:
let num = 123;
let cur_num = num;
let sum = 0;
let product = 1; 
while(cur_num>=1){
    let digit = cur_num%10;
    cur_num = Math.floor(cur_num/10)
    sum = sum + digit;
    product = product * digit;     
}
if(sum==product){
    console.log("Spy Number")
}
else{
    console.log("Not a spy Number")
}