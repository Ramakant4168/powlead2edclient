import React, { Component } from 'react'
import AnchorListItem from '../features/anchor-listing/AnchorListItem'
import axios from 'axios'

class AnchorInfoPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading:false,
            inputUrl: "",
            data: []
        }
    }

    componentDidMount() {

        if (this.props.location.payload) {
            const { inputUrl, anchors } = this.props.location.payload

            let anchorsArray = anchors.map((anchor,index) => {

                if (anchor && anchor.text.includes('<img')) {
                    anchor.text = "link has image"
                }
                anchor.id = index
                anchor.isSelected= false
                return anchor
            })

            this.setState({
                inputUrl,
                data: anchorsArray
            })
        }
    }

    handleCheckbox=(id)=>{
       
        let {data} = this.state;

        for(let i=0;i<data.length;i++){
            if(data[i].id===id)
            data[i].isSelected = !data[i].isSelected;
        }

        this.setState({data:data})

    }

    handleClick = () => {

        let selectedData = this.state.data.filter((element=>element.isSelected===true))

        let body = {
            inputUrl: this.state.inputUrl,
            data: selectedData
        }
        const instance = axios.create({ baseURL: 'https://powlead2ed.firebaseio.com/' })
 
            instance.post('/scrap.json', body)
            .then((response) => {
                alert("saving......")
                this.props.history.push({
                    pathname: '/info',
                });
            })
            .catch((error) => {
                alert(error)
            })
    }

    render() {

        const { data, inputUrl, isLoading } = this.state;
        return (
            <>
            {isLoading ? <div>Saving......</div> :
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                {data.length > 0 ? <div style={{ display: 'flex', marginTop: '10px' }} >
                    <label style={{color:'rebeccapurple'}}> Available anchor tags on page:  {inputUrl}</label>
                </div> : null}
               
                <div
                    style={{
                        display: 'flex',
                        flex: 1,
                        padding: '10px',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        borderStyle: 'solid',
                        borderWidth: 1,
                        borderColor: 'black',
                        scrollBehavior: 'auto',
                    }}>

                    {data.length > 0 ? data.map((row) => <AnchorListItem key={row.id} handleCheckbox={this.handleCheckbox} anchorData={row}></AnchorListItem>) : null}

                </div>

                {data.length > 0 ? <div style={{ display: 'flex', marginTop: '10px' }} >
                    <button
                        className="btn "
                        style={{ marginTop: 10, width: 150, height: 40, background: "#33B8FF", color: 'white' }}
                        onClick={() => {
                            this.handleClick()
                        }}>
                        save list
                    </button>
                </div> : null}
            </div>
            }
            </>



        )
    }
}

export default AnchorInfoPage


