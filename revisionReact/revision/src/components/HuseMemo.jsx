import React, { useEffect, useMemo, useState } from 'react'

export const HuseMemo = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false);
    const doubleNumber = useMemo(() => {
         return slowFunction(number);
    }, [number])
    const themeStyles = useMemo(() => {
        return {

            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark])

    useEffect(() => {
        console.log("theme changed");
    }, [themeStyles])
    return (
        <div>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>change theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </div>
    )
}

function slowFunction(num) {
    console.log('Calling slow function');
    for (let i = 0; i <= 1000000000; i++)
        return num * 2

}

