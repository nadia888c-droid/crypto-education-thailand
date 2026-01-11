function calculatePortfolioValue(holdings) {
    return holdings.reduce(function (total, holding) {
        return total + (holding.amount * holding.price);
    }, 0);
}
var checkQuizAnswer = function (userAnswer, correctAnswer) {
    return userAnswer === correctAnswer;
};
