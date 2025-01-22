// Function that returns a Promise
function greet(name) {
    return new Promise((resolve, reject) => {
        if (name) {
            resolve(`Hello, ${name}!`);
        } else {
            reject('No name provided.');
        }
    });
}

// Using the promise with then() and catch()
greet()
    .then((message) => {
        console.log('Greeting successful:');
        console.log(message);
    })
    .catch((error) => {
        console.log('Greeting failed:');
        console.log(error);
    });
