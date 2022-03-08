import React, { useEffect, useRef, useState } from 'react'

export const HuseRef = () => {
    const [name, setName] = useState("")
    const renderRef = useRef(1)
    const inputRef = useRef()
    const prevRef = useRef()
    const focus  = () => {
        inputRef.current.focus()
    }
    useEffect(() => {
        //it will not cause the re-render
        // renderRef.current = renderRef.current+1

        // to presist the previous value
        prevRef.current = name
    }, [name])
    return (
        <div>
            <input ref={inputRef} type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <div>My name is {name} and is used to be {prevRef.current}</div>
            {/* <div>text is typed {renderRef.current} times</div> */}
            <button onClick={focus}>Focus</button>
        </div>
    )
}
