// Any variables declared within this function will not be accessible outside the function.
function scopeFunction(){

    // The variable publicVariable is accessible anywhere inside this function.
    let publicVariable = 42;

    // Curly brackets within a function indicate another internal closure;
    {
        let privateVariable = 108;

        // variables inside closures can still be accessed, but only within the closure.
        console.log(privateVariable);
    }

    console.log("Public Variable:", publicVariable);

    try {
        console.log("Private Variable:", privateVariable);
    } catch(e) {
        console.info("This variable is not available in this scope");
    }
}

scopeFunction();

// The variable secret is not accessible or modifiable anywhere except in that function, but we can still get the value
// and pass it to closure B by calling the method;
function closureA(){
    let secret =  21;
    return secret;
}

function closureB(value){
    return value * 2;
}

let valueA = closureA();
let valueB = closureB(valueA);
console.log(valueB);