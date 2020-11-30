
import React, { Component } from 'react'
import axios from 'axios'


class HomePage extends Component {

  constructor(props){
    super(props)
    this.state = {
      isLoading : false
    }
    this.input = React.createRef();
    this.instance = axios.create({baseURL: 'http://localhost:8080'})
   
  }

  handleClick = () => {
    let url = this.input.current.value;
    if(!url){
      alert("oops url missing")
      return
    }

    if(!url.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)){
      alert("invalid url")
      return;
    }
    
    
    this.setState({isLoading:true},()=>{

      
      this.instance.post(`/powlead2ed/crawler/get-page-info`, {
        url
      })
      .then( (response) =>{
         
          let payload = {
            anchors : response.data.data,
            inputUrl : url
          }
          this.setState({isLoading:false},()=>{
              this.props.history.push({ 
                pathname: '/info',
                payload: payload
              });
          })
      })
      .catch((error)=>{
        alert(error)
        this.setState({isLoading:false})
      })
    })
    
  }

 
  render() {
    return (
     
      <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:'200px'}}>
        <span style={{fontSize:30, color:'cornflowerblue'}}>Enter Web Page URL</span>
        
        <input 
          disabled ={this.state.isLoading ? true : false}  
          className="form-control" 
          style={{width:600,height:40,marginTop:10,}}
          ref={this.input}
        />
      
        <button 
          className="btn " 
          style={{marginTop:10,width:150,height:40,background:"cornflowerblue",color:'white'}}
          onClick={ this.state.isLoading ? null :()=>{
            this.handleClick();
          }}
          >
           {this.state.isLoading ? 'Loading....' :'Go'}
        </button>

      

      </div>
    )
  }
}

export default HomePage
