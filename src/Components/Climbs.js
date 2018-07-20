import React, { Component } from 'react'
import axios from 'axios'

import Button from './Button'
import ClimbList from './ClimbList'

export default class Climbs extends Component {

    constructor (){
        super()
        this.state={
            climbs:[]
        }
    }

    ComponentDidMount() {
        axios.get('/api/climbs').then(res=>{
            this.setState({climbs:res.data})
        })
    }

    

    render(){
       
        return (
         <div> 
             <Button clicky={<ClimbList/>}/>
             
         </div>   
        )
    }
}