/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
constructor(author, content, timeStamp, numberOfLikes, comments) {
  this.author = author;
  this.content = content;
  this.type = timeStamp;
  this.numberOfLikes = numberOfLikes;
  this.comments = comments;
}

};

var content = new Tweet("Lizzo", "Spooky Booty", "Oct, 31 11:11 PM", 190000, 665);
console.log(content);

var content = new Tweet("Lizzo", "Dia de los Twerkos", "nov, 02 10:10 PM", 56000, 522);
console.log(content);
