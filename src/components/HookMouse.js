import React,{useState, useEffect} from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('mouse event');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect call');
        window.addEventListener('mousemove', logMousePosition)

        // untuk cleanup kita mereturn di dalam useeffect ini 
        // jadi apapun yang kita return adalah cleanup function
        return () => {
            console.log('component unmounting code');
            window.removeEventListener('mousemove', logMousePosition)
        }

    }, [])

    return (
        <div>
            Hooks X - {x} Y - {y}            
        </div>
    )
}

export default HookMouse
