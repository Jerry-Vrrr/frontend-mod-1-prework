// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Velvet Mummy";
var specialAbility = "dance fighting";
console.log(heroName);
console.log(specialAbility);

// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = "Coo coo cachoo," + heroName;
console.log(greeting);

var catchPhrase = `When crime is up, I get down and boogie with my ${specialAbility}!`;
console.log(catchPhrase);

// Declare two variables - power AND energy - set to integers
var power = 9;
var energy = 7;

var fullPower = (power * 500);
var fullEnergy = (energy + 150);
console.log(fullPower);
console.log(fullEnergy);

// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy

// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true
var identityConcealed = false

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ["Sand Demon", "Twist O Wallace", "Zoot Suit Swampdog"];
var sideKicks = ["Silk Sphinx", "The Scarab Kid", "Disco Dracula" ];
// Print the first sidekick to your console
console.log(sideKicks[0]);
// Print the last archEnemy to the console
console.log(archEnemies[2]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push("The Unraveler");
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sideKicks.shift();
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sideKicks);
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
var announcement = 'Never fear, the Courageous Curly Bracket is here!';
var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';

function assessSituation(dangerLevel, saveTheDay, badExcuse) {
  // if ((dangerLevel >=10) && (dangerLevel< 50)) {
  //   console.log(announcement)
  // } else if (dangerLevel < 10) {
  //   console.log("Meh. Hard pass.")
  // } else if (dangerLevel > 50) {
  // console.log(excuse)
  // }
  if (dangerLevel > 50) {
    console.log(badExcuse)
  } else if (dangerLevel < 10) {
    console.log("Meh. Hard pass.")
  } else {
    console.log(saveTheDay)
  }

};

//var dangerLevel = 99
assessSituation(99,"Saving the day!", "I need to wash my hair tonight." )
//var dangerLevel = 21
assessSituation(21, announcement, excuse)
//var dangerLevel = 3
assessSituation(3, announcement, excuse)
// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
//var announcement = 'Never fear, the Courageous Curly Bracket is here!';
//var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: "Bigfoot",
  Smell: "not good",
  weight: 952,
  citiesDestroyed: ["Olympia", "Portland"],
  luckyNumbers: [2,3,4],
  address: address = {
    number: 7,
    street: "Quatch Quarry lane",
    state: "Washington",
    zip: 12347,
  }
}
console.log(scaryMonster);
Create a new class called SuperHero
- Your class should have the following DYNAMIC values
  - name
  - superpower
  - age
- Your class should have the following STATIC values
  - archNemesis, assigned to "The Syntax Error"
  - powerLevel = 100
  - energyLevel = 50
class SuperHero {
  constructor(name, superpower, age,) {
    this.name = name
    this.superpower = superpower
    this.age = age
    this.archNemesis = "The Syntax Error"
    this.powerLevel = 100
    this.energyLevel = 50
  }



sayName(){
  console.log(this.name);
  }
maximizeEnergy(){
  console.log(this.energyLevel = 1000);
  }
gainPower(number){
console.log(this.powerLevel += number);
  }
}
// - Create the following class methods
//   - sayName, should print the hero's name to the console


//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number
//var maximizeEnergy = (energyLevel = 1000);
//var gainPower = (energyLevel * 2)
// console.log(maximizeEnergy);
// console.log(gainPower);
// - Create 2 instances of your SuperHero class
var soop1 = new SuperHero("Crybaby", "literal heart melting tears", .5 );
soop1.sayName();
soop1.maximizeEnergy();
console.log(soop1);
var soop2 = new SuperHero("The Swaddler", "Magic Blanket", 32);
//console.log(soop);
soop2.sayName();
soop2.gainPower(9);
console.log(soop2);
// Reflection
// What parts were most difficult about this exerise?
// Recalling newly acquired skills. I stumbed a bit on some of the commands. Took longer than expected.
// What parts felt most comfortable to you?
// Most of it felt great and went smoothly, but it was a needed reminder that things that were easy yesterday
// could become dificult again if I don't keep sharp.
// What skills do you need to continue to practice before starting Mod 1?
//All of them, and almost daily.
