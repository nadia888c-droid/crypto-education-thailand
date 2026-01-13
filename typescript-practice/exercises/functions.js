"use strict";
function calculatePortfolioValue(holdings) {
    return holdings.reduce((total, holding) => total + (holding.amount * holding.price), 0);
}
const checkQuizAnswer = (userAnswer, correctAnswer) => userAnswer === correctAnswer;
