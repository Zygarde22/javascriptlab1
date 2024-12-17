console.log("Script loaded successfully!");

// Function to find the smallest number
function findSmallest() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const num3 = Number(document.getElementById('num3').value);

    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById('resultSmallest').textContent = "Please enter valid numbers.";
        return;
    }

    const smallest = Math.min(num1, num2, num3);
    document.getElementById('resultSmallest').textContent = `The smallest number is: ${smallest}`;
}

// Function to check if a number is positive, negative, or zero
function checkNumber() {
    const number = Number(document.getElementById('checkNumber').value);

    if (isNaN(number)) {
        document.getElementById('resultCheck').textContent = "Please enter a valid number.";
        return;
    }

    let result;
    if (number > 0) {
        result = "positive";
    } else if (number < 0) {
        result = "negative";
    } else {
        result = "zero";
    }

    document.getElementById('resultCheck').textContent = `The number is ${result}.`;
}

// Function to check if someone is of voting age
function checkAge() {
    const age = Number(document.getElementById('ageInput').value);

    if (isNaN(age)) {
        document.getElementById('resultAge').textContent = "Please enter a valid age.";
        return;
    }

    let result;
    if (age >= 18) {
        result = "eligible to vote.";
    } else {
        result = "not eligible to vote.";
    }

    document.getElementById('resultAge').textContent = `You are ${result}`;
}

// Attach event listeners to the buttons
document.getElementById('findSmallestButton').addEventListener('click', findSmallest);
document.getElementById('checkNumberButton').addEventListener('click', checkNumber);
document.getElementById('checkAgeButton').addEventListener('click', checkAge);
