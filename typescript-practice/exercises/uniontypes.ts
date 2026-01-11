type CryptoCategory = 'currency' | 'platform' | 'defi' | 'nft';  
type QuizResult = 'correct' | 'incorrect' | 'partial';  

function getValue<T>(value: T | undefined): T {
  if (value === undefined) {
    throw new Error("Value cannot be undefined");
  }
  return value;
}

