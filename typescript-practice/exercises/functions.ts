function calculatePortfolioValue(  
  holdings: { coin: string; amount: number; price: number }[]  
): number {  
  return holdings.reduce((total, holding) =>  
    total + (holding.amount * holding.price), 0  
  );  
}  

const checkQuizAnswer = (userAnswer: number, correctAnswer: number): boolean =>  
  userAnswer === correctAnswer;  

