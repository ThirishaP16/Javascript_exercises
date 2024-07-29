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


for (let i = 1; i <= 50; i++) {
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

// Generating numbers and marking evens, odds and prime numbers with three different colors. 

// See the image below.

// https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_min_project_number_generator_day_3.1.gif