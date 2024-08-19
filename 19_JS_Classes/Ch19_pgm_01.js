// Level 1

// 1. Create an Animal class. The class will have name, age, color, legs properties and create 
// different methods
// 2. Create a Dog and Cat child class from the Animal Class.

// Level 2

// Override the method you create in Animal class

// Level 3

// Let's try to develop a program which calculate measure of central tendency of a sample(mean, 
// median, mode) and measure of variability(range, variance, standard deviation). 
// In addition to those measures find the min, max, count, percentile, and frequency 
// distribution of the sample. You can create a class called Statistics and create all the 
// functions which do statistical calculations as method for the Statistics class. 
// Check the output below.

class Animal {
    constructor(name, age, color, legs) {
        this.name = name;
        this.age = age;
        this.color = color;
        this.legs = legs;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`);
    }
}


class Dog extends Animal {
    constructor(name, age, color) {
        super(name, age, color, 4); 
    }

    displayInfo() {
        console.log(`Dog - Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`);
    }
}


class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age, color, 4); 
    }

    displayInfo() {
        console.log(`Cat - Name: ${this.name}, Age: ${this.age}, Color: ${this.color}, Legs: ${this.legs}`);
    }
}

class Statistics {
    constructor(data) {
        this.data = data;
    }

    count() {
        return this.data.length;
    }

    sum() {
        return this.data.reduce((acc, curr) => acc + curr, 0);
    }

    min() {
        return Math.min(...this.data);
    }

    max() {
        return Math.max(...this.data);
    }

    range() {
        return this.max() - this.min();
    }

    mean() {
        return this.sum() / this.count();
    }

    median() {
        const sorted = [...this.data].sort((a, b) => a - b);
        const middle = Math.floor(sorted.length / 2);
        if (sorted.length % 2 === 0) {
            return (sorted[middle - 1] + sorted[middle]) / 2;
        } else {
            return sorted[middle];
        }
    }

    mode() {
        const freqMap = {};
        this.data.forEach(num => {
            freqMap[num] = freqMap[num] ? freqMap[num] + 1 : 1;
        });

        let mode = [];
        let maxFreq = 0;
        for (const num in freqMap) {
            if (freqMap[num] > maxFreq) {
                mode = [parseInt(num)];
                maxFreq = freqMap[num];
            } else if (freqMap[num] === maxFreq) {
                mode.push(parseInt(num));
            }
        }

        return { mode: mode, count: maxFreq };
    }

    var() {
        const mean = this.mean();
        const sqDiffs = this.data.map(num => (num - mean) ** 2);
        return sqDiffs.reduce((acc, curr) => acc + curr, 0) / this.count();
    }

    std() {
        return Math.sqrt(this.var());
    }

    freqDist() {
        const freqMap = {};
        this.data.forEach(num => {
            freqMap[num] = freqMap[num] ? freqMap[num] + 1 : 1;
        });

        const freqArray = Object.entries(freqMap)
            .map(([num, freq]) => [freq, parseInt(num)])
            .sort(([freq1], [freq2]) => freq2 - freq1); // Sort by frequency in descending order

        return freqArray;
    }
}


const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
const statistics = new Statistics(ages);

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range()) // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]