//Exercise 1
const myCar = {
  make: "Nissan",
  model: "Versa",
  year: "2016",
  getInfo: function () {
    console.log(myCar.make, myCar.model, myCar.year);
  }, //anonymous function
};
myCar.getInfo();
//Exercise 2
const student = {
  name: "Aline",
  age: "27",
  grades: [100, 90, 97, 85],
  avGrade: function () {
    console.log(); //How do you calculate the average of an array?? Googled it- but not quite sure I understand...
  },
};
student.avGrade();

//Exercise 3
const colorContainer = document.getElementById("colorContainer");

const myButton = document.querySelector(".myButton");

myButton.addEventListener("click", function () {
  colorContainer.style.color = "red";
});

//Exercise 4
const testParagraph = document.getElementById("testParagraph");

// const myButton = document.querySelector(".myButton");
//Placeholder since myButton was already declared in the previous exercise

myButton.addEventListener("click", function () {
  testParagraph.textContent = "Changed paragraph!";
});

//Exercise 5
const myList = document.getElementById("myList");

// const myButton = document.querySelector(".myButton");
//Placeholder since myButton was already declared in the previous exercise - could probably just move it to within each method instead

myButton.addEventListener("click", function () {
  const sixthItem = document.createElement("li");
  sixthItem.textContent = "Item 6";
  myList.appendChild(sixthItem);
});
