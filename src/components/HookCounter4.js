import React, {useState} from 'react'

function HookCounter4() {
    
    const[items, setItems] = useState([])
    
    const addItem = () => {
        // setitems ada dua argumen yang pertama itemnya di spread setelah itu object barunya
        setItems([...items, {
            id: items.length,
            // di bawah ini random nomor antara 1 - 10
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    


    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>
                {
                    items.map(item => <li key={item.id}>{item.value}</li>  )
                }    
            </ul>        
        </div>
    )
}

export default HookCounter4
