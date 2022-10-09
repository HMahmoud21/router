 
import React, { Component } from 'react'
  class  App extends Component {
    constructor(props) {
      console.log("CONSTRUCTOR");
      super(props)
      this.state = {
        fullName:"Hajer Mahmoud",
        bio:"etudiant",
        profession:"etudiant",
        show:true ,
        imag:"https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg", 
         count:0
  
    }
     
    }
    
  entDidMount() {
this.setState({count:this.state.count + 1})
    }
    addCount = ()=> {
      this.setState({count:this.state.count + 1})
    }
  showInfo = ()=>{
    this.setState({show:!this.state.show})
  }
      render() {
        console.log("RENDER");
  
      return ( <div>
          {this.state.show ? (  <div>
            <h2>Hello my name is {this.state.fullName} my bio {this.state.bio
      } my profession{this.state.profession}</h2>
          </div>):(  <div>
            <h2>I can't show my information</h2>
          </div>)}
          <h3> {this.state.count}</h3>
          <button onClick={()=>{this.showInfo();
          this.addCount()}}>{this.state.show ? ("Hidde my information"):("Show my information")}</button>
        </div>)
      }
    }
      
    export default App;
