//Find whether the given number is prime or composite and print it.
//Solution:
let num = 9;
    let count = 0;
    for(let i=1;i<=num;i++){
        if(num%i==0){
            count++
        }
    }
    if(count==2){
        console.log("Prime number")
    }
    else{
        console.log("Composite number")
    }