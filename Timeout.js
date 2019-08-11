


/**
 * Asynchronous functions should have their own 
 * crash handlers
 */
baz = () => {
try 
{

}catch(e) {

}
}

try {
    foo();
    bar();
    const myTimeout = setTimeout(baz, 0); // crashes - no handler is there
    clearTimeout(myTimeout);
} catch (e) {
    // handle foo & bar
}


const syncAsync = () => {
    console.log('a');
    alert('a');
    setInterval(() => {
        console.log('inside interval');
    }, 1000);
    setTimeout(() => {
        alert('Inside Timeout');
    }, 1000);
}
