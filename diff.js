
var sumNum = 0
var num = 0
var diff = 0
var squareNum = 0
function sumSquare(){
    for (i=1;i<=10;i++){
        sumNum = sumNum + (i*i);
        console.log(sumNum);
        
    }
    console.log("final sumNum: " + sumNum);
    return(sumNum);
}


function squareSum(){
for (j = 1;j <= 10;j++){
console.log("current num: " + j);
num = (num + j);
console.log("current sum: " + num);




}
squareNum = num*num;
console.log(squareNum)
return(squareNum)
}




diff = (squareSum() - sumSquare());
console.log("the difference is: " + diff);
alert("the difference is: " + diff)