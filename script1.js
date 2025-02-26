// Function to calculate factorial iteratively
function factorialIterative(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Function to calculate factorial recursively
function factorialRecursive(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

// Function to handle input validation
function validateInput(input) {
    const number = parseInt(input);
    if (isNaN(number) || number < 0) {
        return false;
    }
    return true;
}

// Function to update the result on the page
function displayResult(result, method) {
    const resultElement = document.getElementById('result');
    const methodElement = document.getElementById('method');
    resultElement.textContent = `Result: ${result}`;
    methodElement.textContent = `Method: ${method}`;
}

// Event listeners for the buttons
document.getElementById('iterative-btn').addEventListener('click', function () {
    const inputValue = document.getElementById('number').value;

    if (!validateInput(inputValue)) {
        alert('Please enter a valid positive integer.');
        return;
    }

    const number = parseInt(inputValue);
    const result = factorialIterative(number);
    displayResult(result, 'Iterative');
});

document.getElementById('recursive-btn').addEventListener('click', function () {
    const inputValue = document.getElementById('number').value;

    if (!validateInput(inputValue)) {
        alert('Please enter a valid positive integer.');
        return;
    }

    const number = parseInt(inputValue);
    const result = factorialRecursive(number);
    displayResult(result, 'Recursive');
});
