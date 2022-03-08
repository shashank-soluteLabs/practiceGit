import { createContext, useState } from "react";

export const ThemedContext = createContext();

export const ThemedContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");
    
    const handleThemeChange = (data) => {
        setTheme(data)
    }

    return <ThemedContext.Provider value={{ theme, handleThemeChange }}>{children}</ThemedContext.Provider>
}