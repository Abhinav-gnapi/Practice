console.log("hello abhi");
let greet: String = "how are u";
console.log(greet)

interface Rectangle {
  height: number,
  width: number
}

const rectangle: Rectangle = {
  height: 20,
  width: 10
};

console.log(rectangle)

type Animal = { name: string };
type Bear = Animal & { honey: boolean };
const bear: Bear = { name: "Winnie", honey: true };

type Status = "success" | "error";
let response: Status = "success";
let respo: Status = "error";
console.log(bear);
console.log(response)
console.log(respo)


function divide({ dividend, divis }: { dividend: number, divis: number }) {
  return dividend / divis;
}
console.log(divide({dividend:12, divis:4}))

let x: unknown = 'hello';
console.log(x, " =>", (x as string).length);