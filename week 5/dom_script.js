console.dir(document.body);
console.dir(document);
console.log("hello")
const person = {
   name: "John",
   age: 30,
   address: {
       city: "New York",
       zip: "10001"
   }
};
console.dir(person);
console.log(person);

document.getElementById("heading3").style.color = "blue";

// let head = document.getElementsByClassName("headings");
// head.style.backgroundColor = "yellow";

console.dir(document.getElementsByClassName("container"));
console.log(document.getElementsByClassName("container"));

let heading2 = document.getElementById("heading2");
heading2.innerText = heading2.textContent + " Bengaluru based";