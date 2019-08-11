fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
        // will return a promise
        console.log(someUndefinedKey());
        return response.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch(e => {
        console.log(e);
    });

/**
 * Callbacks
 */
// fetch("url", function() {
//     response.json(data, function() {

//     })
// });

/**
 * Return an Array after timeout
 */
const timeOutPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([1,2,3,4]);
        }, 0);
    });
};

timeOutPromise()
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        alert(error);
    })


const getTitle = () => {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => resolve(data.title))
            .catch(e => reject(e));
    });
};

const myAsyncFunction = async () => {
    try {
        const title = await getTitle();
        console.log(`The title is ${title}`);
    } catch(e) {
        console.error("Failed to retrieve title");
    }
};

getTitle()
    .then(title => {
        console.log(`The title is ${title}`);
    })
    .catch(e => {
        console.error("Failed to retrieve title");
    })
