let interestRate = 0.15;
let bonus = 15;

// Every time the function below is called, variables in the global scope or modified, resulting in different results every time
function bankInterestCalculator(baseAmount = 100, region = "USD", creditRating = 700){
    if (region === "CAD") {
        interestRate += 0.05;
    }

    if (creditRating < 500) {
        interestRate *= 1.25;
    }

    if (creditRating > 850) {
        bonus = 30;
    }

    return baseAmount * interestRate + bonus;
}