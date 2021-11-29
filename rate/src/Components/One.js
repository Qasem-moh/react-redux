import React from 'react'
import Two from './Two'
function one(props) {
    return (
      <div>
        <h2>Hi from One</h2>
        <Two theme={props.theme} />
      </div>
    );
}

export default one