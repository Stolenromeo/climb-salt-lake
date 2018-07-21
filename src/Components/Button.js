import React from 'react'

export default function Button (props){
    return  (
        <button onClick={()=>props.setID(props.id)}>More Info?</button>
)
}