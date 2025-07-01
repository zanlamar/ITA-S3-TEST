"use strict"

function getAllDirectors(array) {
  let result =  array.map(movie => movie.director);
  return result;
}

function getMoviesFromDirector(array, director) {
  let result = array.filter(movie => movie.director === director).map(movie => movie);
  return result;
}

function moviesAverageOfDirector(array, director) {
  let scores = array.filter(movie => movie.director === director).map(movie => movie.score);
  let avScore = parseFloat(Number(scores.reduce((acc, currValue) => acc + currValue, 0) / scores.length).toFixed(2));
  return avScore;
}

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


function moviesAverageByCategory(array, category) {
  const byGenre = array.filter((movie) => movie.genre.includes(category)).map(movie => movie.score);
  let avScore = parseFloat(Number(byGenre.reduce((acc, currValue) => acc + currValue, 0) / byGenre.length).toFixed(2));
  return avScore;g
};

  function hoursToMinutes(movies) {
    return movies.map(movie => {
      const newArray = { ...movie};
      let min = 0;
      let hours = 0;
      let unity = movie.duration.split(' ');
  
      unity.forEach(element => {
        if (element.includes('h')) {
          hours = parseInt(element);
        }
        if (element.includes('min')) {
          min = parseInt(element);
        }
      });
      newArray.duration = hours * 60 + min;

      return newArray;
    });
  }

function bestFilmOfYear(movies, year) {
  let perYear = movies.filter(movie => movie.year === year);
  let bestRatings = [... perYear].sort((a, b) => b.score - a.score);
  return bestRatings.length > 0 ? [bestRatings[0]] : [];
}


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
