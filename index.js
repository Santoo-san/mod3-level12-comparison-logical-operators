console.log("Hallo Winc Academy studenten");
// dit is een grote som
let multiplication = 1230941 * 1823794;
console.log(multiplication);

//else-if statement
let myAge = 9;

if (myAge > 39) {
  console.log("you are older than me!");
} else if (myAge > 21) {
  console.log("you are younger thane me, but still adult");
} else if (myAge > 10) {
  console.log("you are a teenager");
} else {
  console.log("you are a child");
}
const isFemale = false;
if (isFemale == true) {
  console.log("please enter");
} else console.log("get out of my face, you man");
console.log(1 + 3);

const driverStatus = "piet";
if (driverStatus == "bob") {
  console.log("no beers for you, you may drive");
} else console.log("take a beer, and a taxi");

//&&logical operator

if (myAge >= 18 && myAge <= 25) {
  console.log("Je krijgt 50% korting");
} else console.log("je betaalt het volle pond");

const name = "Piet";

if (name === "Bram" || name === "Sarah") {
  console.log("gratis bier voor jou");
} else console.log("gewoon betalen vriend");

//const totalAmount = 24;
// const totalAmount = 49;
//const totalAmount = 99;
const totalAmount = 101;

if (totalAmount >= 25 && totalAmount < 50) {
  console.log("gratis ballen");
} else if (totalAmount >= 50 && totalAmount < 100) {
  console.log("gratis nachos");
} else if (totalAmount >= 100) {
  console.log("gratis fles champagne");
} else console.log("je krijgt helemaal niets");
