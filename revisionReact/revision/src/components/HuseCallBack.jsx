import React, { useCallback, useState } from 'react'
import { List } from './List';

export const HuseCallBack = () => {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false);
    const getNum = useCallback((incrementor) => {
        return [number+ incrementor, number+ incrementor + 1, number+ incrementor + 2]
    }, [number])

    const theme = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
    return (
        <div style={theme}>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>change theme</button>
            <List getItem= {getNum}/>
        </div>
    )
}

