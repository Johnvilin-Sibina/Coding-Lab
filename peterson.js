//Find whether the given number is peterson number
//Solution:
let num = 145;
let cur_num = num;
let sum = 0;

while(cur_num>=1){
  digit= cur_num%10
  cur_num = Math.floor(cur_num/10)
  let fact = 1;
  for(let i=1;i<=digit;i++){
   fact = fact*i
   }
   sum = sum + fact;
}
if(sum==num){
    console.log("Peterson Number")
}
else{
    console.log("Not a Peterson Number")
}