
// You should implement your task here.

module.exports = function towelSort (matrix = false) {
  let res = [];
if (matrix === false) {
  res = [];
} else {
  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 === 0 || i === 0){
      res = res.concat(matrix[i]);
    } else {
      res = res.concat(matrix[i].reverse());
    }
    
  }
}
return res;
}
