console.log("hello world");
console.log(typeof("hello"));
console.log(typeof("123"));
console.log(typeof(112));
console.log(typeof(3.2));
console.log(typeof(0/2));
console.log(typeof(2/0));
console.log(typeof(true));

let marks = [85, 97,44,37,76,60];
let sum = 0;
for(let m of marks){
    sum += m;
}
let avg = sum/(marks.length);
console.log("average of marks =",avg);


let price = [250,645,300,900,50];
let ind = 0;
for(let p of price){
    price[ind] = price[ind] - ((p / 10));
    ind++;
}
console.log(price);

let str = "Abhinav";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
let str1 = "  mohit Kumar ";
console.log(str1);
console.log(str1.trim());
console.log(str.slice(1));
console.log(str.slice(1,9));
console.log(str.slice(3,5));
console.log(str.concat(str1.trim()));
console.log(str.concat(str1));
let str2 = "hihihi";
console.log(str2.replace("i","o"));
console.log(str2.replace("i"));
console.log(str2.replace("o"));
console.log(str2.replaceAll("i","o"));
console.log(str.charAt(2));



let arr = [85, 97,44,37,76,60];
// console.log(arr.push("item"));
// console.log(arr);
// console.log(arr.pop());
// console.log(arr.toString());
// console.log(arr.concat(price));
// console.log(arr.unshift("price"));
// console.log(arr);
// console.log(arr.shift());
// console.log(arr);
// console.log(arr.slice());
// console.log(arr.slice(2,4));
// console.log(arr.slice(2));
// console.log(arr.slice(2,));
console.log(arr);
// console.log(arr.splice(2));
// console.log(arr);
// console.log(arr.splice(2,0));
// console.log(arr);
// console.log(arr.splice(2,0,101));
// console.log(arr);
// console.log(arr.splice(2,0,101,102));
// console.log(arr);
// console.log(arr.splice(2,0,101,102,103));
// console.log(arr);
console.log(arr.splice(2,1,101,102,103));
console.log(arr);


function myFunction() {
    console.log("Welcome to gnapi");
    console.log("We are learning JS :)");
}
myFunction();

let msg = `Hello gnapi`;
function great(msg){
    console.log(msg);
}
great(msg);

// const fn = () => console.log(arguments); 
// function fn() {
//   console.log(arguments); // ✔️ works
// }

let ar = [1,2,3,4,5,6,7,8,9,10]
        ar.forEach( (x,i) => {
            // console.log(i,x)
            return x,i;
        });
        console.log(ar);
// let arr1 = ar.map((i) => {
//             return i*5;
//         })
//         console.log(arr1)


