import React, {useState} from 'react'

function HookCounter() {

    // 0 itu default value

    const [count, setCount] = useState(0, () => setCount(count + 1))
    
    return (
        <div>
            <button onClick={setCount}>count {count}</button>
        </div>
    )
}

export default HookCounter
