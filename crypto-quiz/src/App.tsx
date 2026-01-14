import "./App.css";
import { useState, useEffect } from "react";

type Question = {
  question: string;
  options: string[];
  correctIndex: number;
  explanations: string[]; // one explanation per option
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
    correctIndex: 1,
    explanations: [
      "Wrong: Bitcoin was not created to make online shopping faster.",
      "Correct: Bitcoin allows people to send money without relying on banks or governments.",
      "Wrong: Gaming payments were not Bitcoin’s purpose.",
      "Wrong: Bitcoin has nothing to do with stock trading."
    ]
  },
  {
    question: "What does decentralization mean in blockchain?",
    options: [
      "One company controls the network",
      "No single authority controls the network",
      "Transactions are slower",
      "Banks approve transactions"
    ],
    correctIndex: 1,
    explanations: [
      "Wrong: Decentralization means no single company is in control.",
      "Correct: Power is spread across many computers instead of one authority.",
      "Wrong: Slower transactions are not the definition of decentralization.",
      "Wrong: Banks do not approve transactions in decentralized systems."
    ]
  },
  {
    question: "What is a blockchain?",
    options: [
      "A type of cryptocurrency",
      "A public database of transactions",
      "A crypto wallet",
      "An exchange"
    ],
    correctIndex: 1,
    explanations: [
      "Wrong: A blockchain is not a currency itself.",
      "Correct: A blockchain is a shared, public record of transactions.",
      "Wrong: Wallets store keys, not transaction history.",
      "Wrong: Exchanges are platforms to trade crypto, not blockchains."
    ]
  },
  {
    question: "What is Ethereum mainly used for?",
    options: [
      "Only storing money",
      "Smart contracts and decentralized apps",
      "Mining Bitcoin",
      "Sending emails"
    ],
    correctIndex: 1,
    explanations: [
      "Wrong: Ethereum is more than just storing money.",
      "Correct: Ethereum allows smart contracts and decentralized applications to run.",
      "Wrong: Ethereum does not mine Bitcoin.",
      "Wrong: Ethereum has nothing to do with email services."
    ]
  },
  {
    question: "What does NFT stand for?",
    options: [
      "New Financial Token",
      "Non-Fungible Token",
      "Network Fee Transfer",
      "Non-Fixed Trade"
    ],
    correctIndex: 1,
    explanations: [
      "Wrong: NFTs are not called New Financial Tokens.",
      "Correct: Non-fungible means each token is unique and not interchangeable.",
      "Wrong: NFT does not relate to network fees.",
      "Wrong: NFTs are not about trading rules."
    ]
  },
  {
    question: "Why are private keys important?",
    options: [
      "They create new coins",
      "They prove ownership of crypto",
      "They control the internet",
      "They speed up mining"
    ],
    correctIndex: 1,
    explanations: [
      "Wrong: Private keys do not create coins.",
      "Correct: A private key proves ownership and allows access to crypto.",
      "Wrong: Private keys do not control the internet.",
      "Wrong: Mining speed is unrelated to private keys."
    ]
  },
  {
    question: "What happens if you lose your private key?",
    options: [
      "You can reset it",
      "Your crypto is permanently inaccessible",
      "The bank restores it",
      "The blockchain fixes it"
    ],
    correctIndex: 1,
    explanations: [
      "Wrong: Private keys cannot be reset.",
      "Correct: Without the key, no one can access the crypto — not even developers.",
      "Wrong: Banks have no control over blockchain wallets.",
      "Wrong: Blockchains cannot recover lost private keys."
    ]
  },
  {
    question: "What is a smart contract?",
    options: [
      "A legal paper contract",
      "Self-executing code on the blockchain",
      "A crypto wallet",
      "A mining tool"
    ],
    correctIndex: 1,
    explanations: [
      "Wrong: Smart contracts are digital, not paper documents.",
      "Correct: Smart contracts automatically run when conditions are met.",
      "Wrong: Wallets store keys, not contracts.",
      "Wrong: Mining tools are unrelated to smart contracts."
    ]
  },
  {
    question: "Why is Bitcoin supply limited?",
    options: [
      "To increase inflation",
      "To create digital scarcity",
      "Because computers are slow",
      "To help banks"
    ],
    correctIndex: 1,
    explanations: [
      "Wrong: Bitcoin is designed to reduce inflation, not increase it.",
      "Correct: Limited supply creates scarcity, similar to gold.",
      "Wrong: Computer speed has nothing to do with supply limits.",
      "Wrong: Bitcoin was designed to work without banks."
    ]
  },
  {
    question: "What is a major risk of cryptocurrency?",
    options: [
      "Price volatility",
      "Too much regulation",
      "Guaranteed profits",
      "Unlimited supply"
    ],
    correctIndex: 0,
    explanations: [
      "Correct: Crypto prices can change very quickly and unpredictably.",
      "Wrong: Regulation varies by country and is not the main risk.",
      "Wrong: Crypto never guarantees profits.",
      "Wrong: Most cryptocurrencies have limited supply."
    ]
  }];

export default function App() {
  const [formData, setFormData] = useState({
  name: "",
  email: "",
  country: "Thailand",
});

  const [registered, setRegistered] = useState(false);

const handleInputChange = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(15);

  const current = questions[currentIndex];

  const handleAnswer = (index: number) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
    if (index === current.correctIndex) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setTimeLeft(15);
    }
  };

  const isQuizComplete = currentIndex === questions.length - 1 && showExplanation;

  useEffect(() => {
    if (selectedAnswer !== null) return;

    if (timeLeft === 0) {
      setShowExplanation(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, selectedAnswer]);

    return (
    <div className="page">
      <h1 className="main-title">Crypto Education Quiz</h1>

      {!registered ? (
       <div className="register-box">

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleInputChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <button
          onClick={() =>
            formData.name && formData.email && setRegistered(true)
          }
        >
          Start Quiz
        </button>
      </div>
    ) : (

        <div className="quiz-container">
        <div className="question-card">
          <p>Time left: {timeLeft}s</p>
          <h2 className="question-text">{current.question}</h2>

          <div>
            {current.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={
                  selectedAnswer !== null
                    ? index === current.correctIndex
                      ? "correct"
                      : index === selectedAnswer
                      ? "wrong"
                      : ""
                    : ""
                }
              >
                {option}
              </button>
            ))}
          </div>
          {showExplanation && (
            <div>
              <div>
                {current.explanations.map((exp, i) => (
                  <p key={i}>{exp}</p>
                ))}
              </div>
              <button onClick={handleNext}>
                {isQuizComplete ? "See Results" : "Next"}
              </button>
            </div>
          )}
          {isQuizComplete && (
            <div>
              <h2>Quiz Complete!</h2>
              <p>
                Your Score: {score}/{questions.length}
              </p>
            </div>
          )}
        </div>
      </div>
    )}
    </div>
  );
}
