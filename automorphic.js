// Find whether the given number is automorphic number
//Solution:
let num = 25;
let square = num*num;
let cur_num = num;
let sq_num = square;
let count = 0;
while(cur_num>=1){
let num_digit = cur_num%10;
cur_num = Math.floor(cur_num/10);
let sq_digit = sq_num%10;
sq_num= Math.floor(sq_num/10);
if(num_digit==sq_digit){
continue;
}
else{
count++;
}
}
if(count==0){
    console.log("Automorphic Number");
}
else{
    console.log("Not an Automorphic Number");
}