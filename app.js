// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const over19 = people.some(person => {
  const today = new Date().getFullYear();
  return today - person.year >= 19;
});

// console.log(over19);
// console.log({over19}); //adding curly brackets also gives you name of var


// -------------------------------------------------------------------------------------------------------
// Array.prototype.every() // is everyone 19 or older?

const over19s = people.every(person => {
  const today = new Date().getFullYear();
  return today - person.year >= 19;
});
// console.log(over19s);

// -------------------------------------------------------------------------------------------------------

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const specialComment = comments.find(comment => (comment.id === 823423));
// console.log(specialComment);


// -------------------------------------------------------------------------------------------------------
// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const commentToDelete = comments.findIndex(comment => (
  comment.id === 823423 //found the index
  ));
  // console.table(comments);
  comments.splice(commentToDelete, 1); // deleted the index that was found
  // console.table(commentToDelete);
  // console.table(comments);

  // or we can do this

  const newComments = [
    ...comments.slice(0, commentToDelete),
    ...comments.slice(commentToDelete)
];

// console.table(newComments);
