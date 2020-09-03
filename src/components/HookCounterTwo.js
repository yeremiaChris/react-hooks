import React, {useState} from 'react'


function HookCounterTwo() {

    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    
    // jadi setCount itu kita masukan function yang memiliki hubungan ke count yang sebelumnya

    const incrementFive = () => {
        for(let i=0; i<5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            Count:  {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default HookCounterTwo
