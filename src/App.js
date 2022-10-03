 import React, { Component } from 'react'
 
 class  App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    
      fullName:"hajerMahmoud",
      bio:"etudiant",
      profession:"etudiant",
      bool:true ,
      imag:"https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg", 
       
    
  }
    this.myFunction = this.myFunction.bind(this);
  }
  
  myFunction(e) {
    
    this.setState({fullName: this.state.fullName } )
    this.setState({bio: this.state.bio} )
  }
    
  

    render() {
      if (this.state.bool)
      return (
        <div >
          <p>Hello </p>
    
          <button onClick={this.myFunction}>
           Click me!
          </button>
        </div>
      );
    }
  }
    
  export default App;