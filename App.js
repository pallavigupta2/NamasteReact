const heading = React.createElement("h1",{},"from react!");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading)

    let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); // What is logged?
  }
  console.log(count); // What is logged?
})();


numbers();
var numbers = function () {
  console.log("Number one");
}
numbers();
function numbers() {
  console.log("Number two");
}
numbers();

var length = 4;
function callback() {
  console.log(this.length);
}
const object = {
  length: 5,
  method() {
    arguments[0]();
  }
};
object.method(callback, 1, 2);



const fruits = ['mango', 'apple'];
fruits.length = 0;
console.log(fruits);