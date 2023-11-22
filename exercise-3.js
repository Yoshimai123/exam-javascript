const book = {
    title: "Il Grande Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
};
  
book.rating = 6;
  
book.increaseRating = function(value) {
    this.rating = Math.min(this.rating + value, 10);
};
  
delete book.year;
  
const keys = Object.keys(book);
for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    console.log(`${key}: ${book[key]}`);
}