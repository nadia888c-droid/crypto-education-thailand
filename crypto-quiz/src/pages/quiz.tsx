import { useState, useEffect } from "react";
import Header from "../components/Header";
import QuestionCard from "../components/QuestionCard";

const questions = [
  {
    question: "What is Bitcoin?",
    options: ["A coin", "A blockchain", "A bank", "A game"],
    correct: 1,
  },
  {
    question: "Ethereum is mainly used for?",
    options: ["Payments", "Smart contracts", "Mining", "Storage"],
    correct: 1,
  },
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


