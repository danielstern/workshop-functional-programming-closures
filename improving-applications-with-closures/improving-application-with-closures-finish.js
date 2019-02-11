// The interest rate variable is sequestered in this closure and cannot be modified accidentally.
function getInterestRate(region = "USD", creditRating = 700) {
    let interestRate = 0.15;
    if (region === "CAD") {
        interestRate += 0.05;
    }

    if (creditRating < 500) {
        interestRate *= 1.25;
    }
    return interestRate;
}

// The bonus value is redefined every time this function runs.
function getBonus (creditRating = 700) {
    let bonus = 15;
    return creditRating > 800 ? (bonus * 2) : bonus;
}

// This version of the bank interest calculator returns consistent results.
function bankInterestCalculator(baseAmount = 100, region = "USD", creditRating = 700){
    let interestRate = getInterestRate(region, creditRating);
    let bonus = getBonus(creditRating);
    return baseAmount * interestRate + bonus;
}