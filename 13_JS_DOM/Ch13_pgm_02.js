// DOM: Mini Project

// Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// 1. The year color is changing every 1 second
// 2. The date and time background color is changing every on seconds
// 3. Completed challenge has background green
// 4. Ongoing challenge has background yellow
// 5. Coming challenges have background red


function changeYearColor() {
    const yearElement = document.querySelector('h2');
    setInterval(() => {
        const randomColor = getRandomColor();
        yearElement.style.color = randomColor;
    }, 1000);
}


function changeDateTimeBackground() {
    const dateTimeElement = document.querySelector('.wrapper');
    setInterval(() => {
        const randomColor = getRandomColor();
        dateTimeElement.style.backgroundColor = randomColor;
    }, 1000);
}


function setChallengeStatus() {
    const challenges = document.querySelectorAll('li');
    challenges.forEach(challenge => {
        const challengeText = challenge.textContent.toLowerCase();
        if (challengeText.includes('done')) {
            challenge.style.backgroundColor = 'green'; 
        } else if (challengeText.includes('ongoing')) {
            challenge.style.backgroundColor = 'yellow';
        } else {
            challenge.style.backgroundColor = 'red'; 
        }
    });
}


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


changeYearColor();
changeDateTimeBackground();
setChallengeStatus();


// <!-- index.html -->


// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <title>JavaScript for Everyone:DOM</title>
//   </head>
//   <body>
//     <div class="wrapper">
//         <h1>JavaScript Challenges in 2024</h1>
//         <h2>30DaysOfJavaScript Challenge</h2>
//         <ul>
//             <li>30DaysOfPython Challenge Done</li>
//             <li>30DaysOfJavaScript Challenge Ongoing</li>
//             <li>30DaysOfReact Challenge Coming</li>
//             <li>30DaysOfFullStack Challenge Coming</li>
//             <li>30DaysOfDataAnalysis Challenge Coming</li>
//             <li>30DaysOfReactNative Challenge Coming</li>
//             <li>30DaysOfMachineLearning Challenge Coming</li>
//         </ul>
//     </div>
//   </body>
// </html>