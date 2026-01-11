interface User {
  readonly id: number;
  name: string;
  email: string;
  country: string;
  completedQuizzes: number[];
  age?: number;
}

interface Question {
  id: number;
  text: string;
  correctAnswer: number;
}

interface Quiz {
  id: number;
  title: string;
  questions: Question[];
}


const user1: User = {
  id: 1,
  name: "Nadia",
  email: "nadia@email.com",
  country: "Thailand",
  completedQuizzes: [1, 2]
};

const quiz1: Quiz = {
  id: 1,
  title: "Crypto Basics",
  questions: [
    {
      id: 1,
      text: "What is Bitcoin?",
      correctAnswer: 0
    }
  ]
};

console.log(user1);
console.log(quiz1);
