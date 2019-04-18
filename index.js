function scoreCalculator(arr) {
  let invalid = false;
  let score = 0;
  let bonus = 100;

  if (arr === undefined){
    return -1;
  }
  if (!Array.isArray(arr)){
    return undefined;
  }
  arr.forEach(function(radius){
    if (radius < 1 || radius > 20){
      invalid = true;
    }
  })
  if (invalid){
    return undefined;
  }

  arr.forEach(function(radius){
    if (radius > 5){
      bonus = 0;
    }
    score += radius;
  })
  score += bonus;
  return score;
}

module.exports = scoreCalculator;
