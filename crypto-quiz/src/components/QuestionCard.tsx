interface QuestionCardProps {
  question: string;
  options: string[];
  onSelect: (index: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  options,
  onSelect,
}) => {
  return (
    <div>
      <h2>{question}</h2>

      {options.map((option, index) => (
        <button key={index} onClick={() => onSelect(index)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default QuestionCard;
