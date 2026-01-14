interface QuestionCardProps {
  question: string;
  options: string[];
  correctIndex: number;
  selectedAnswer: number | null;
  explanations: string[];
  onSelect: (index: number) => void;
}



const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  options,
  correctIndex,
  explanations,
  selectedAnswer,
  onSelect,
}) => {
  return (
    <div>
      <h2>{question}</h2>

      {options.map((option, index) => {
        let style = {};

        if (selectedAnswer !== null) {
          if (index === correctIndex) {
            style = { backgroundColor: "lightgreen" };
          } else if (index === selectedAnswer) {
            style = { backgroundColor: "#f8b4b4" };
          }
        }

        return (
          <button
            key={index}
            onClick={() => onSelect(index)}
            disabled={selectedAnswer !== null}
            style={{ display: "block", margin: "8px 0", ...style }}
          >
            {option}
          </button>
        );
      })}
      {selectedAnswer !== null && (
        <div style={{ marginTop: "15px" }}>
          <p>
            {explanations[selectedAnswer]}
          </p>

          <p style={{ fontWeight: "bold" }}>
            Correct answer: {options[correctIndex]}
          </p>
        </div>
      )}

      {selectedAnswer !== null && (
        <div style={{ marginTop: "15px" }}>
          {selectedAnswer === correctIndex ? (
            <p style={{ color: "green" }}>
              ✅ Correct — {explanations[correctIndex]}
            </p>
          ) : (
            <>
              <p style={{ color: "red" }}>
                ❌ Incorrect — {explanations[selectedAnswer]}
              </p>
              <p style={{ color: "green" }}>
                ✅ Correct answer explanation: {explanations[correctIndex]}
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default QuestionCard;
