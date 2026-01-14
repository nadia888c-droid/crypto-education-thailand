import { useState, useEffect } from "react";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";

const questions = [
  {
    question: "What is Bitcoin?",
    options: ["A coin", "A blockchain", "A bank", "A game"],
    correct: 1,
    explanations: [
      "Bitcoin is not a physical coin; it is digital.",
      "Correct: Bitcoin runs on a blockchain, which records transactions.",
      "Bitcoin is not controlled by a bank.",
      "Bitcoin is not designed as a game."
    ]
  },
  {
    question: "Ethereum is mainly used for?",
    options: ["Payments", "Smart contracts", "Mining", "Storage"],
    correct: 1,
    explanations: [
      "Ethereum can send payments, but that is not its main purpose.",
      "Correct: Ethereum is designed for smart contracts and dApps.",
      "Mining exists, but it is not Ethereum’s main use.",
      "Ethereum is not primarily for file storage."
    ]
  }
];


const Quiz = () => {
  // STATE MANAGEMENT
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  // TIMER
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);

    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      <Header title="Crypto Quiz" subtitle="Test your knowledge" />

      <p>Time left: {timeLeft}s</p>
      <p>Score: {score}</p>

      {currentQuestion < questions.length ? (
<>
  <QuestionCard
    question={questions[currentQuestion].question}
    options={questions[currentQuestion].options}
    correctIndex={questions[currentQuestion].correct}
    explanations={questions[currentQuestion].explanations}
    selectedAnswer={selectedAnswer}
    onSelect={handleAnswer}
  />

  {selectedAnswer !== null && (
    <button onClick={nextQuestion}>Next</button>
  )}
</>
      ) : (
        <h2>Quiz finished! Final score: {score}</h2>
      )}
    </div>
  );
};

export default Quiz;


