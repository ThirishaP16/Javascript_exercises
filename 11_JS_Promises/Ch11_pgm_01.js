// Callbacks

const doSomething = callback => {
    setTimeout(() => {
      const skills = ['HTML', 'CSS', 'JS']
      callback('It did not go well', skills)
    }, 2000)
  }
  
  const callback = (err, result) => {
    if (err) {
      return console.log(err)
    }
    return console.log(result)
  }
  
  doSomething(callback);

  const Something = (callback) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS'];
        // Example: Simulating a successful operation
        callback(null, skills);
    }, 2000);
};

const call = (err, result) => {
    if (err) {
        console.log('Error:', err);
    } else {
        console.log('Result:', result);
    }
};

Something(call);


// after 2 seconds it will print
// It did not go well

