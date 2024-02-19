// Find whetherr the given number is a palindrome
// Solution:
let num = 121;
let curr_num = num;
let rev = 0;
while(curr_num>=1){
digit = curr_num%10;
curr_num = Math.floor(curr_num/10);
rev = rev*10+digit;
}
if(rev==num){
    console.log("The given number is palindrome")
}
else{
    console.log("The given number is not a palindrome")
}

