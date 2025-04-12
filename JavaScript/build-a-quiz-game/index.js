const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Venus", "Jupiter"],
    answer: "Mars",
  },
  {
    category: "Geography",
    question: "Which country has the largest land area in the world?",
    choices: ["Russia", "Canada", "China"],
    answer: "Russia",
  },
  {
    category: "History",
    question: "Who was the first president of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
    answer: "George Washington",
  },
  {
    category: "Literature",
    question: "Who wrote 'Romeo and Juliet'?",
    choices: ["William Shakespeare", "Mark Twain", "Jane Austen"],
    answer: "William Shakespeare",
  },
  {
    category: "Movies",
    question: "Which movie won the Academy Award for Best Picture in 1994?",
    choices: ["Forrest Gump", "Pulp Fiction", "The Shawshank Redemption"],
    answer: "Forrest Gump",
  },
];

const getRandomQuestion = (questionList) =>
  questionList[Math.floor(Math.random() * questionList.length)];

const getRandomComputerChoice = (choiceList) =>
  choiceList[Math.floor(Math.random() * choiceList.length)];

const getResults = (questionObj, computerChoice) => {
  if (questionObj.answer === computerChoice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
};
