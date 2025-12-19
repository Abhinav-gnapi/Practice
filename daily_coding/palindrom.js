const str = "Malayalam";
const strlower = str.toLowerCase();
console.log("og string -> ", strlower);

let rev = "";
for(let i=strlower.length-1; i>=0; i--){
    rev = rev + strlower.charAt(i);
}
console.log("reversed string -> ", rev);

if(strlower === rev) {
    console.log("palindrom")
} else {
    console.log("not a palindrom")
}