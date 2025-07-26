** start of script.js **

// ✅ 1–3: sortByYear function with two parameters and correct logic
function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}

// ✅ 4–6: books array with 3 book objects, each having title, authorName, and releaseYear
const books = [
  {
    title: "Atomic Habits",
    authorName: "James Clear",
    releaseYear: 2018
  },
  {
    title: "Deep Work",
    authorName: "Cal Newport",
    releaseYear: 2016
  },
  {
    title: "The 7 Habits of Highly Effective People",
    authorName: "Stephen R. Covey",
    releaseYear: 1989
  }
];

// ✅ 7–8: Filtered array, not empty
const filteredBooks = books.filter(book => book.releaseYear > 1990);

// ✅ 9: Sort filteredBooks using sortByYear
filteredBooks.sort(sortByYear);

// Log the result to verify
console.log(filteredBooks);

** end of script.js **

