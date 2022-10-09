
import React, {component }from 'react'

class  Profile extends component{
    render() {
        
        return this.props.name.map((prof)=>
        <h1 key={this.prof}>{prof.fullName} {prof.bio} {prof.professio}</h1>)
          
        
      }




};
export default Profile



