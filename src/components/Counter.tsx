import React from 'react'

export const Counter = () => {
    const [counter, setCounter] = React.useState(0);

    return (
        <button onClick={()=> setCounter(counter + 1)}>
            {counter}
        </button>
    )
}
