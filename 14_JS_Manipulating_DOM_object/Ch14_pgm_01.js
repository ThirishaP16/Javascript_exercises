// Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
function isPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return true;
}


const container = document.getElementById('number-container');


for (let i = 1; i <= 100; i++) {
    const numberDiv = document.createElement('div');
    numberDiv.textContent = i;
    numberDiv.classList.add('number');

    if (i % 2 === 0) {
        numberDiv.classList.add('even');
    } else {
        numberDiv.classList.add('odd');
    }


    if (isPrime(i)) {
        numberDiv.classList.add('prime');
    }

    container.appendChild(numberDiv);
}

// 1. Even numbers background is green
// 2. Odd numbers background is yellow
// 3. Prime numbers background is red