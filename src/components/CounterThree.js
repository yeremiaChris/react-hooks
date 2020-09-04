import React, { useReducer } from 'react'


const initialState = 0

// reducer(menerima 2 values dan return 1 value)
// 2 value yang diterima adalah reducer(currentState,action)
// 1 value yang di kembalikan adalah new state
// currentState itu adalh state yang baru2 ini`
const reducer = (state, action) => {
    // untuk mengeksekusi code berdasarkan action kita menggunakan switch statement
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState

        default:
            return state
    }
}

// diatas adaalh membuat reducer function dan mendefinisikan initialStatenya

function CounterThree() {
    // 2 paramater, pertama reducer function, yang kedua initialstate 
    const [count, dispatch] = useReducer(reducer, initialState)
    // useReducer itu return currentState yaitu = count dan dispatch
    // currentState itu maksudnya state yang baru jadi pertamanya itu valuenya sama dengan initialState

    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)

    return (
        <div>
            <div>count- {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>

            <div>count- {countTwo}</div>
            <button onClick={() => dispatchTwo('increment')}>Increment</button>
            <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
            <button onClick={() => dispatchTwo('reset')}>Reset</button>
        </div>
    )
}

export default CounterThree
