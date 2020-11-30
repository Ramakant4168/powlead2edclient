
import React from 'react'
import { ReactTinyLink } from 'react-tiny-link'

export default function ProductListItem(props) {
    let { anchorData } = props;
    return (
        <div
            style={{
                display: 'flex',
                flex: 1,
                flexDirection: 'row',
                borderStyle: 'solid',
                borderWidth: 1,
                padding: '5px',
                marginTop: 5,
            }}>

             <div style={{display: 'flex',flex: .5,justifyContent: 'flex-start'}}>
              <input onClick={()=>{props.handleCheckbox(anchorData.id)}} type="checkbox"/>
             </div>

            <div style={{display: 'flex',flex: 5,justifyContent: 'flex-start', width:'500px'}}>
             <ReactTinyLink
              cardSize="small"
              showGraphic={true}
              maxLine={2}
              minLine={1}
              url={anchorData.link}
             />
             </div>

             <div style={{display: 'flex',flexDirection: 'column',marginLeft:'5px', flex: 5,justifyContent: 'flex-start'}}>
                 <label>Caption: <span style={{color:'GrayText'}}>{anchorData.text}</span></label>
                 <label>URL: <span style={{color:'GrayText'}}>{(anchorData.link).slice(0,60)}...</span></label>
                 <label>Url relative: <span style={{color:'GrayText'}}>{anchorData.isUrlRelative}</span></label>
                 <label>Content Size: <span style={{color:'GrayText'}}>{anchorData.contentLenght}</span></label>
                 <label>Server Info: <span style={{color:'GrayText'}}>{anchorData.serverInfo}</span></label>
                 <label>Content Encoding: <span style={{color:'GrayText'}}>{anchorData.contentEncoding}</span></label>
             </div>
        </div>
    )
}
