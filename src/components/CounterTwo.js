import React, { useReducer } from 'react'


const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

// reducer(menerima 2 values dan return 1 value)
// 2 value yang diterima adalah reducer(currentState,action)
// 1 value yang di kembalikan adalah new state
// currentState itu adalh state yang baru2 ini`
const reducer = (state, action) => {
    // untuk mengeksekusi code berdasarkan action kita menggunakan switch statement
    switch (action.type) {
        case 'increment':
            return { ...state,firstCounter: state.firstCounter + action.value}
        case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state,secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState

        default:
            return state
    }
}

// diatas adaalh membuat reducer function dan mendefinisikan initialStatenya

function CounterTwo() {
    // 2 paramater, pertama reducer function, yang kedua initialstate 
    const [count, dispatch] = useReducer(reducer, initialState)
    // useReducer itu return currentState yaitu = count dan dispatch
    // currentState itu maksudnya state yang baru jadi pertamanya itu valuenya sama dengan initialState

    return (
        <div>
            <div>count- {count.firstCounter}</div>
            <div>Seccount- {count.secondCounter}</div>
            <button onClick={() => dispatch({ type: 'increment', value:1})}>
                Increment -1
            </button>
            <button onClick={() => dispatch({ type: 'decrement',value:1})}>
                Decrement -1
            </button>
            <button onClick={() => dispatch({ type: 'increment', value:5})}>
                Increment - 5
            </button> 
            <button onClick={() => dispatch({ type: 'decrement',value:5})}>
                Decremen- 5
            </button>
            <button onClick={() => dispatch({ type: 'increment2', value:5})}>
                Increment - 5
            </button>
            <button onClick={() => dispatch({ type: 'decrement2',value:5})}>
                Decrement - 5
            </button>
            <button onClick={() => dispatch({ type: 'increment2', value:1})}>
                Increment - 1
            </button>
            <button onClick={() => dispatch({ type: 'decrement2',value:1})}>
                Decrement -1
            </button>
            <button onClick={() => dispatch({type: 'reset'})}>
                Reset
            </button>
        </div>
    )
}

export default CounterTwo
