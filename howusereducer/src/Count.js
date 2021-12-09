import React, { useReducer } from 'react'


function countReducer(state, action) {
    if (action === 'INCREMENT') {
        return state + 1
    }
    if (action === 'DECREMENT') {
        return state - 1
    }
    if (action === 'RESET') {
        return 0
    }

    throw new Error();
}

export function Count() {
    const [count, dispatch] = useReducer(countReducer, 0)
    return (
        <div className={'container-fluid '}>
            <h1 className={'m-12'}>count: {count}</h1>
            <br />
            <button className={'btn btn-primary m-2'} onClick={() => dispatch('INCREMENT')}>increment</button>
            <button className={'btn btn-danger m-2'} onClick={() => dispatch('DECREMENT')}>decrement</button>
            <button className={'btn btn-warning m-2'} onClick={() => dispatch('RESET')}>RESET</button>
        </div>
    )
}
