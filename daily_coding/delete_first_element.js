// const arr = [2,4,6,8,10];
// console.log(arr.shift());
// console.log(arr)

let arr = [10, 20, 30, 40, 50];

for (let i = 1; i < arr.length; i++) {
    arr[i - 1] = arr[i];
    console.log(arr[i])
}

arr.length = arr.length - 1;
console.log(arr.length)
console.log(arr);
