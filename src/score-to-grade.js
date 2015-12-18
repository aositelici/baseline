function scoreToGrade(score) {
  var grade = '';
  score = parseInt(score);

  if(score > 100 || score < 0) {
    grade = 'out of range';
  } else if(score >= 90){
    grade = 's';
  } else if(score >= 80){
    grade = 'a';
  } else if(score >= 70){
    grade = 'b';
  } else if(score >= 60){
    grade = 'c';
  } else if(score < 60 && score >=0){
    grade = 'd';
  } else {
    throw new TypeError("invalid input");
  }
  return grade;
}
