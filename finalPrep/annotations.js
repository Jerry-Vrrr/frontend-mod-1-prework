// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear - function with variable categories
function buildABear(name, age, fur, clothes, specialPower) {
  //Add greeting using interpolation
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //define demographics as name,age
  var demographics = [name, age];
  // Add saying using concatenation
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  //create class titled builtBear with dynamic and fixed values
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  };

  return builtBear
}
//Add 2 instances of buildABear
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz function created with 3 dynamic values num1, num2 and where the loop will end.
function fizzBuzz(num1, num2, range) {
  //create dynamic loop when 0 is present log fizzbuzz
  for (var i = 0; i <= range; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      console.log('fizzbuzz');
      //if num1 is present, log fizz
    } else if (i % num1 === 0) {
      console.log('fizz');
      //else if num2 is present, log buzz
    } else if (i % num2 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}
//execute instances
fizzBuzz(3, 5, 100);
//command broken (b nstead of B)
fizzbuzz(5, 8, 400);
