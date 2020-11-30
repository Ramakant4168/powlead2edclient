

import React, { Component } from 'react'
import axios from 'axios'
import ResourceListing from '../features/resource-listing/ResourceListing'

class ResourcePage extends Component {

  constructor(props) {
    super(props)
    this.state = {
        showData : false,
        data: [],
        isLoading : false
    }
  }

  componentDidMount(){
    const instance = axios.create({baseURL: 'https://powlead2ed.firebaseio.com/'})
      instance.get('/scrap.json')
      .then( (response) =>{
        let objArray = [];
        
        if(response.data){
          
          for(const[key, val] of Object.entries(response.data)){
            
            let obj = {
              id: key, 
              url : val.inputUrl,
              data: val.data
            }
            console.log("==obj",obj)
            objArray.push(obj);
          }
         

        }
       
        this.setState({
          data : objArray
        })
        

      })
      .catch((error)=>{
        alert(error)
        
      })
  }

  handleDataClick = () => {

    this.setState({
      showData : !this.state.showData
    })
  }

  deleteData = (key) => {
    alert(key)
  }

  render() {
    const dataArray = this.state.data
    return (
      <div
      style={{
          display: 'flex',
          flex: 1,
          padding: '10px',
          flexDirection: 'column',
          justifyContent: 'center',
          scrollBehavior: 'auto',
          margin : '10px',
      }}>
        
        {
          dataArray.map((data)=><ResourceListing key={data.id} deleteData={this.deleteData} data={data} ></ResourceListing> )
          
        }
        
      </div> 
    )
  }
}

export default ResourcePage


