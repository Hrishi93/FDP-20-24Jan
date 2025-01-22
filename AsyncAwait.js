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

// Async function using await to call greet
async function greetUser() {
    try {
        // Await the result of the greet function
        const message = await greet('Hrishikesh');
        console.log('Greeting successful:');
        console.log(message);
    } catch (error) {
        console.log('Greeting failed:');
        console.log(error);
    }
}

// Call the async function
greetUser();
