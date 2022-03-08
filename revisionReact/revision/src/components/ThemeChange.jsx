import React, { useContext } from 'react'
import { ThemedContext } from '../context/themedContext'

const styles = {
    light: {
        width: "500px",
        height: "200px",
        margin: "auto",
        border: "1px solid black",
        background: "white",
        color: "black"
    },
    dark: {
        width: "500px",
        height: "200px",
        margin: "auto",
        border: "1px solid black",
        background: "black",
        color: "white"
    },
    
}
export const ThemeChange = () => {
    const { theme, handleThemeChange } = useContext(ThemedContext)
    return (
        <>
            <div style={theme === "light" ? styles.light : styles.dark}>Hello There!</div>
            <button onClick={() => {
                theme === "light" ? handleThemeChange("dark") : handleThemeChange("light")
            }}>{theme === "light" ? "Dark" : "Light"}</button>
        </>
    )
}
