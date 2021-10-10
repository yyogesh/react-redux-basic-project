import * as types from './actionTypes';

const intialState = {
    todos: [{ id: 1, task: 'study', complete: false }]
}

const todoReducer = (state = intialState, action) => {
    switch (action) {
        case types.COMPLETE_TODO:
            return {
                ...state
            }
        default:
            return state
    }
}

export default todoReducer;