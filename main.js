// 1) Write some text in file manually, then read this data with fs module, reverse this text and write reverse.txt

const { readFile } = require("fs");
const fs = require("fs/promises");
const { json } = require("stream/consumers");

// async function main() {
//   const data = await fs.readFile("task1.txt", "utf-8");
//   const reversed = data.split("").reverse().join("");
//   await fs.writeFile("reverse.txt", reversed);
// }

// main();

// 2) Fetch data from this API: https://jsonplaceholder.typicode.com/users. Parse the data so that each object contains only four properties: id, name, username, and email. Write the resulting array to a file called users.json.

// async function fetchData() {
//   const data = await fetch("https://jsonplaceholder.typicode.com/users");
//   const res = await data.json();
//   let users = [];
//   res.map((el) => {
//     const info = {
//       id: el.id,
//       name: el.name,
//       username: el.username,
//       email: el.email,
//     };
//     users.push(info);
//   });
//   await fs.writeFile("users.json", JSON.stringify(users));
// }
// fetchData();
// 3) Run the command node main.js Ferrari 2020 red, retrieve the data from process.argv, and build a car object with the properties id, carModel, carColor, and carReleaseDate.(id should be unique) Append this object to cars.json. Each time you run this command, a new object should be added to cars.json, so if you run it five times, you should have five objects in the file.

// const [, , car, year, color] = process.argv;

// async function Cars() {
//   const data = await fs.readFile("cars.json", "utf-8");
//   const cars = JSON.parse(data);
//   let counter = 0;
//   const newCar = {
//     id: counter,
//     carModel: car,
//     carColor: color,
//     carReleaseData: year,
//   };
//   counter++;
//   cars.push(newCar);
//   await fs.writeFile("cars.json", JSON.stringify(cars));
// }
// Cars();

// 4) Write a random text into a file named text.txt. Then, read this file and count how many vowels are present.

async function Vowels() {
  const text = await fs.readFile("text.txt", "utf-8");
  let counter = 0;
  for (let i = 0; i < text.length; i++) {
    if ("aeiou".includes(text[i])) {
      counter++;
    }
  }
  console.log(counter);
}
Vowels();
