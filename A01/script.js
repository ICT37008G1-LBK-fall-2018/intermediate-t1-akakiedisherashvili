let a = Number(prompt("Enter First Number")); // 15
let b = Number(prompt("Enter Second Number")); //30
let sum = 0;
if (a >= b) {
    console.log("არასწორი შუალედი");



}
else if (b > 100) {
    console.log("არასწორი შუალედი");



}
else if (b > 1000) {
    console.log("არასწორი შუალედი");



}
else if (a < 0 || b < 0) {
    console.log("არასწორი შუალედი");



}else{
for(a; a<=b; a++){
sum = sum+a;
}
alert(sum);
}