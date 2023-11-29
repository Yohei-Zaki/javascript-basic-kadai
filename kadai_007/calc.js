// 変数宣言
let num; 

// numに値代入
num = 15;
console.log(num);

// console.log(num);
// 条件分岐
if(num === 0){
    console.log(num);
}else if(num % 3 ===0 && num % 5 === 0){
    console.log("3と5の倍数です");
}else if(num % 3 === 0){
    console.log("3の倍数です");
}else if(num % 5 ===0){
    console.log("5の倍数です");
}
else{
    console.log(num);
}
