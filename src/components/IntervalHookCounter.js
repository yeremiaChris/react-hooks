import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {

    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        const interval = setInterval(tick,1000)

        // cleanup
        return () => {
            clearInterval(interval)
        }
    },[count])``
    // kalo mau intervalnya cuma sekali aja di jalankan kita buat parameter keduanya dengabn empty array


    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalHookCounter
