import React from 'react'

const Bar = ({onClick, text}) => (
    <li 
        onClick={onClick}>
        {text}
    </li>
)

export default Bar