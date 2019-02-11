const defaultState = {
    name:"Dave",
    age:40
};

// in this method, the original state object is not changed. This is an example of functional programming.
function immutableAgeIncrement(state){
    return {...state,age:state.age+1};
}

function immutableNameChange(state,name){
    return {...state,name};
}

// in this method, the state object is changed or "mutated". This is an example of object oriented programming, which is powerful but can be hard to debug.
function mutableAgeIncrement(state){
    state.age += 1;
    return state;
}

function immutableComposedChange(state,name){
    let newState = immutableAgeIncrement(state);
    newState = immutableNameChange(newState,name);
    return newState;
}