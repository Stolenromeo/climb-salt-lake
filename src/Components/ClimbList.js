import React from 'react'
import Button from './Button';


export default function ClimbList (props){
    

    
    //Render this.props.name this.props.location 
    //also render button which onClick calls parent function to set activeId of climb
return (
<div>
    <div   className="climb-list"> <div>{props.climb.name}</div>  <div>{props.climb.types}</div>
    <Button id={props.climb.id} setID={props.button} />
    </div>
    <hr/>
</div>
)
    
}