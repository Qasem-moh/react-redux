import React from 'react'

export default class ClassComponents extends React.Component {

    constructor() {
        super();
        this.inputRef = React.createRef()
    }
    run=()=> {
        this.inputRef.current.focus();
    }
    render() {
        return (
            <div>
                Hi from clsass<br/>
                <input ref={this.inputRef} />
                <button onClick={this.run}>Run</button>
            </div>
        )
    }
}