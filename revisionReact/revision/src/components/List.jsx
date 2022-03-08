import React, { useEffect, useState } from 'react'

export const List = ({getItem}) => {
    const [item, setItem] = useState([]);
    useEffect(() => {
        setItem(getItem(2));
        console.log('updating item');
    }, [getItem])
    return item.map((e) => (
        <div key={e}>{e}</div>
    ))
}
