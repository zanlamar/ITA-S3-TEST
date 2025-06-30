"use strict"

// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(movie => movie.director);
  //console.log("EXERCISE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director === director).map(movie => movie);
  //console.log("EXERCISE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average score of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let scores = array.filter(movie => movie.director === director).map(movie => movie.score);
  let avScore = parseFloat(Number(scores.reduce((acc, currValue) => acc + currValue, 0) / scores.length).toFixed(2));
  //console.log("EXERCISE 3 ->", avScore);
  return avScore;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const ordered = [...array]
  .sort((a, b) => a.title.localeCompare(b.title))
  .splice(0, 20)
  .map(element => element.title);
  return ordered;
}


// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const arrayByYear = [...array]
  .sort((a, b) => { 
    if (a.year !== b.year) return (a.year - b.year);
    return a.title.localeCompare(b.title);  
  });
  return arrayByYear;
}


// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
