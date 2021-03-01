const { sortedLastIndex } = require("lodash");
var _ = require("lodash");

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((sum, { likes }) => sum + likes, 0);
};

const favoriteBlog = (blogs) => {
  const max = blogs.reduce(function (prev, current) {
    return prev.likes > current.likes ? prev : current;
  }); //returns object
  return max;
};

const mostBlogs = (blogs) => {
  var xdd = _.chain(blogs)
    // Group the elements of Array based on `color` property
    .groupBy("author")
    // `key` is group's name (color), `value` is the array of objects
    .map((value, key) => ({ author: key, blogs: value.length }))
    .value();
  const max = xdd.reduce(function (prev, current) {
    return prev.blogs > current.blogs ? prev : current;
  }); //returns object
  return max;
};
const mostLikes = (blogs) => {
  var xdd = _.chain(blogs)
    // Group the elements of Array based on `color` property
    .groupBy("author")
    // `key` is group's name (color), `value` is the array of objects
    .map((value, key) => ({
      author: key,
      likes: value.reduce((sum, { likes }) => sum + likes, 0),
    }))
    .value();
  console.log(xdd);
  const max = xdd.reduce(function (prev, current) {
    return prev.likes > current.likes ? prev : current;
  }); //returns object
  return max;
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
