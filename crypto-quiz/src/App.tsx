import { useState } from "react";
import "./App.css";

type Question = {
  question: string;
  options: string[];
  correctIndex: number;
};

const questions: Question[] = [
  {
    question: "What problem was Bitcoin designed to solve?",
    options: [
      "Online shopping speed",
      "Trust without central banks",
      "Gaming payments",
      "Stock trading"
    ],
    correctIndex: 1
  },
  {
    question: "What does decentralization mean in blockchain?",
    options: [
      "One company controls the network",
      "No single authority controls the network",
      "Transactions are slower",
      "Banks approve transactions"
    ],
    correctIndex: 1
  },
  {
    question: "What is a blockchain?",
    options: [
      "A type of cryptocurrency",
      "A public database of transactions",
      "A crypto wallet",
      "An exchange"
    ],
    correctIndex: 1
  },
  {
    question: "What is Ethereum mainly used for?",
    options: [
      "Only storing money",
      "Smart contracts and decentralized apps",
      "Mining Bitcoin",
      "Sending emails"
    ],
    correctIndex: 1
  },
  {
    question: "What does NFT stand for?",
    options: [
      "New Financial Token",
      "Non-Fungible Token",
      "Network Fee Transfer",
      "Non-Fixed Trade"
    ],
    correctIndex: 1
  },
  {
    question: "Why are private keys important?",
    options: [
      "They create new coins",
      "They prove ownership of crypto",
      "They control the internet",
      "They speed up mining"
    ],
    correctIndex: 1
  },
  {
    question: "What happens if you lose your private key?",
    options: [
      "You can reset it",
      "Your crypto is permanently inaccessible",
      "The bank restores it",
      "The blockchain fixes it"
    ],
    correctIndex: 1
  },
  {
    question: "What is a smart contract?",
    options: [
      "A legal paper contract",
      "Self-executing code on the blockchain",
      "A crypto wallet",
      "A mining tool"
    ],
    correctIndex: 1
  },
  {
    question: "Why is Bitcoin supply limited?",
    options: [
      "To increase inflation",
      "To create digital scarcity",
      "Because computers are slow",
      "To help banks"
    ],
    correctIndex: 1
  },
  {
    question: "What is a major risk of cryptocurrency?",
    options: [
      "Price volatility",
      "Too much regulation",
      "Guaranteed profits",
      "Unlimited supply"
    ],
    correctIndex: 0
  }
];

function App() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const question = questions[current];

  const handleAnswer = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
    if (index === question.correctIndex) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    setSelected(null);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="container">
        <h1>Quiz Finished</h1>
        <p>Your score: {score} / {questions.length}</p>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Crypto Quiz</h1>
      <p>Question {current + 1} of {questions.length}</p>

      <h2>{question.question}</h2>

      {question.options.map((option, index) => {
        let className = "option";

        if (selected !== null) {
          if (index === question.correctIndex) {
            className += " correct";
          } else if (index === selected) {
            className += " wrong";
          }
        }

        return (
          <button
            key={index}
            className={className}
            onClick={() => handleAnswer(index)}
          >
            {option}
          </button>
        );
      })}

      {selected !== null && (
        <>
          <p className={selected === question.correctIndex ? "correct-text" : "wrong-text"}>
            {selected === question.correctIndex ? "Correct!" : "Incorrect"}
          </p>
          <button className="next-btn" onClick={nextQuestion}>
            Next Question
          </button>
        </>
      )}
    </div>
  );
}

export default App;
