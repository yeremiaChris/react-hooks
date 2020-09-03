import React, {useState, useEffect} from 'react'

function HookCounterOne() {

    const [count,setCount] = useState(0)
    const [name, setName] = useState('')
    // ini di eksekusi setelah setiap render selesai
    useEffect(() => {
        console.log('updating document title');
        document.title = `clicked ${count} times`
    }, [count])

    // maksud dari paramter ke dua diatas adalah 
    // useEffectnya akan di eksekusi ketika countnya ada perubahan

    const incrementCount = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <input type="text" value={name} onChange={(e) => {
                setName(e.target.value)
            }}/>
            <button onClick={incrementCount}>{count} times</button>
        </div>
    )
}

export default HookCounterOne
