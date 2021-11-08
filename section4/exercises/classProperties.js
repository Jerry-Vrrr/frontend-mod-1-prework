/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
class Dog {
  constructor(nam, fed, fixd){
    this.name = nam;
    this.fed = fed;
    this.spayNeuter = fixd;
  }
};

// Prompt 2: Snack
class Snack {
  constructor(name, glt, slt, stk){
    this.name = name
    this.guilty = glt;
    this.salty = slt;
    this.inStock = stk;
}
};
// Prompt 3: Shirt
class Shirt {
  constructor(mat,clr,siz){
    this.material = mat;
    this.color = clr;
    this.size = siz;
  }
};
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
var intake = new Dog("Nugget", true, true);
console.log(intake);

console.log("-------------------------");

// Prompt 2: Snack
var savory = new Snack("popcorn", false, 20);
console.log(savory);

console.log("-------------------------");

// Prompt 3: Shirt
var tShirt = new Shirt("leather", "black", "S");
console.log(tShirt);
console.log("-------------------------");

//-------------------
console.log("-------------------------");

// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog

var intake = new Dog("Max", true, true);
console.log(intake)
var adoption = new Dog("Ziggy", true, false);
console.log(adoption);

console.log("-------------------------");

// Prompt 2: Snack

var savory = new Snack("doritos", true, true, 8);
console.log(savory);
var  sweets = new Snack("granola", false, false, 0)
console.log(sweets);

console.log("-------------------------");

// Prompt 3: Shirt


var tShirt = new Shirt("cotton", "white", "L");
console.log(tShirt);
var crop = new Shirt("poly", "pink", "M");
console.log(crop);
