import React, { useContext} from 'react'
import { ThemeContext } from './ThemeContext'

export default function header() {
    const themeContext = useContext(ThemeContext)
    console.log({ themeContext});
    return (
        <div>
            
            Header
            <hr/>

        </div>
    )
}
