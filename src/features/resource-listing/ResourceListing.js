import React, { Component } from 'react'

class ResourceListing extends Component {
    
    constructor(props){

        super(props)
        this.state = {
         isCollapsed: false
        }

    }
    
    handleDataClick = () => {
        this.setState({
            isCollapsed : !this.state.isCollapsed
        })
    }

	render() {
		const {
			props: {
                data,
                deleteData
			},
			state: {
				isCollapsed
			}
		} = this
		return (

            <div key = {data.id} style={{
                display: 'flex',
                flex: 1,
                flexDirection : 'column',
                
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: 'black',
                padding: '10px',
                marginTop: '2px'
              }}>

                <div style={{
                display: 'flex',
                flex: 1,
                flexDirection : 'row',
                
                }}>

                <div style={{display:'flex',justifyContent:'flex-start',flex:9}}>
                   <label style={{color:'cornflowerblue'}}>Resource URL : {data.url}</label> 
                </div>
                
                <div 
                  onClick={()=>{this.handleDataClick()}}
                  style={{display:'flex',flex:1, justifyContent:'flex-end'}}>
                 {!isCollapsed ? <i class="fa fa-angle-down" style={{fontSize:24}}></i>:<i class="fa fa-angle-up" style={{fontSize:24}}></i>}
                </div>
                </div>  
                

                {isCollapsed ? getdataTable(data.data,data.id, deleteData) : null}
                
              </div>

        )
	}
}

function getdataTable(data, key, fun){
 return (
 <div>
 <table className="table table-striped">
 <thead>
   <tr>
     <th scope="col">Caption</th>
     <th scope="col">web page link</th>
     <th scope="col">Relative</th>
     <th scope="col">Server</th>
     <th scope="col">Content</th>
     
   </tr>
 </thead>
 <tbody>
     {
         data.map((row)=>{
             return (<tr>
                <td>{row.text}</td>
                <td><a href={row.link} rel="noopener noreferrer" target="_blank">{row.link}</a></td>
                <td>{row.isUrlRelative}</td>
                <td>{row.serverInfo}</td>
                <td>{row.contentLenght}kb</td>
              </tr>)
         }) 
     }
   

 </tbody>
</table>
<div style={{display:'flex', justifyContent:'center'}}>
        <button 
          className="btn " 
          style={{marginTop:10,width:150,height:40,background:"cornflowerblue",color:'white'}}
          onClick={ ()=>{
            fun(key);
          }}
          >
          Delete
        </button>
</div>
</div>
)
}

export default ResourceListing
