const likes = names => {
  if (names.length == 0) { return `no one likes this` }
  if (names.length == 1) { return `${names[0]} likes this` }
  if (names.length == 2) { return `${names[0]} and ${names[1]} like this` }
  if (names.length == 3) { return `${names[0]}, ${names[1]} and ${names[2]} like this` } 
  if (names.length >= 4) { return `${names[0]}, ${names[1]} and ${names.length - 2} others like this` }
};

console.log(likes(['Max', 'John', 'Mark', 'James', 'Cindy']));
/*
likes [] // must be "no one likes this"
likes ["Peter"] // must be "Peter likes this"
likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
*/
