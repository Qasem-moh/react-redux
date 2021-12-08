import React, { useState} from 'react'

export const ThemeContext = React.createContext()




export default function ThemeProvider(props) {
    const [theme, setTheme] = useState('dark')
    function toggleTheme() {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            {props.childern}
        </ThemeContext.Provider>
    )
}