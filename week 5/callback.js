// function getData(data, getNextData){
//     setTimeout(() => {
//         console.log("data -> ", data);
//         if(getNextData)
//         getNextData();
//     },2000);
// };
// getData(1, () => {

//     getData(2);
// });


// function sum(call,dis, x, y){
//     let res = x + y;
//     call(res);
//     dis()

// }

// function callb(res){
//     console.log(res);
// }
// function disp() {
//     console.log("ready..")
// }

// sum(callb,disp,1,2);


// function getData(callb) {
//     setTimeout( () => {
//        callb();
//     }, 3000);
//     console.log("done")
// }

// function getCallb() {
//     console.log("data ready...");
// }
// getData(getCallb);



function find(sum, x, y){
    setTimeout( () =>{

        sum(x + y);
    }, 3000)
}
function Disp(res){
    console.log("result = ", res)
}
find(Disp, 3, 5)


let ar = [1,2,3,4,5];
function calc(sumfinder) {
ar.forEach( (i) => {
    setTimeout(()=>{

        sumfinder(i);
    },2000)
})
}

function sumfinder(i){
    console.log(i * i)
}
calc(sumfinder);


// let newArr = ar.map( (i) => {
//     return i*5;
// })
// console.log(newArr)

// let sum = ar.reduce( (res, val) => {
//             console.log(res);
//             return res + val;
//         });

//     console.log("sum - ", sum)

                                                                                                                                                                                                                             