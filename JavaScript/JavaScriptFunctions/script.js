function declaration(para1, para2) {
  return para1 + para2;
}

// Function Expression  always write using const

let a = function () {
  console.log("Hello Folks !!!");
};
a();

function sum(a, b) {
  return a + b;
}

// console.log(a+b);//Returns a NaN as undefined is added in arithmetic operationa and its not a number

let arrow = () => console.log("Hello Earth");

arrow();
// let x = arrow();

// console.log(x);

const a = function () {
  console.log("This is anonymous Function");
  console.log("This is known as Function Expression");
  console.log( "This is not allowed to be called or invoked before its defined or declared ",
  );
};

function fun() {
  console.log("This is Function Statement");
  console.log("This is known as Function Declaration");
  console.log("This is allowed to be called or invoked even before its defined ");

};