let state = {
    value: 0
};

stateHistory = [state];

function add(){
    let input = getInput();
    stateHistory.push(state);
    state = {value:state.value + input};
    validateState();
    render();
}

function subtract(){
    let input = getInput();
    stateHistory.push(state);
    state = {value:state.value - input};
    validateState();
    render();
}

function multiply(){
    let input = getInput();
    stateHistory.push(state);
    state = {value:state.value * input};
    validateState();
    render();
}

function getInput(){
    const input = document.getElementById("input");
    const value = parseInt(input.value);
    return value;
}

function undo(){
    if (stateHistory.length == 1) {state =  stateHistory[0]};
    state = stateHistory.pop();
    render();
}

function validateState(){
    if (isNaN(state.value)) {
        undo();
    }
}

function render(){
    document.getElementById("output").innerHTML = state.value;
    document.getElementById("input").value = ``;
}
