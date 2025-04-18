const getAverage = (scores) => {
  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return sum / scores.length;
};

const getGrade = (score) => {
  if (score === 100) {
    return "A+";
  } else if (score >= 90 && score <= 99) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else {
    return "F";
  }
};

const hasPassingGrade = (score) => {
  let grade = getGrade(score);
  return grade !== "F";
};

const studentMsg = (scores, score) => {
  let classAvg = getAverage(scores);
  let grade = getGrade(score);
  if (hasPassingGrade(score)) {
    return `Class average: ${classAvg}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${classAvg}. Your grade: ${grade}. You failed the course.`;
  }
};
