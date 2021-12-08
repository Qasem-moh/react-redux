import React, { useState } from 'react'


export const ThemeContext = React.createContext();

export function ThemeProvider(props) {

    const [theme, setTheme] = useState('dark')

    function toggleTheem() {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    return (
        <ThemeContext.Provider value={{ theme , toggleTheem}}>
            {props.children}
        </ThemeContext.Provider>
    )
}