import React, { Component } from 'react'
import axios from 'axios'

import ClimbList from './ClimbList'
import ClimbDetails from './ClimbDetails'

export default class Climbs extends Component {

    constructor (){
        super()
        this.state={
            climbs:[],
            selectedId:0
        }
    }

    componentDidMount() {
        axios.get('/api/climbs').then(res=>{
            console.log(res.data)
            this.setState({climbs:res.data})
        })
    }
    //function called climblist. this set selectedid on state
    setID = (id) => {
        this.setState({
            selectedId:id
        })
    }

    render(){
       
        return (
         <div className="climbs"> hello
             {/* Map through climbs, render new climblist component for each */}
             {this.state.climbs.map(elem=>{
                 return(
                     <div>
                         <ClimbList climb={elem} button={this.setID}/>
                    </div>
                 )
             })}
             <ClimbDetails id={this.state.selectedId}/>
            {/* render one component climbDetails passing through prop which is selectedid, this child makes api call and grabs the climb details using that id */}
         </div>   
        )
    }
}