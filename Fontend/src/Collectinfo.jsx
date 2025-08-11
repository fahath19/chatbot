import React from 'react'
import Chatuserform from './Chatuserform'

const Collectinfo = ({collectinfo}) => {
    console.log(collectinfo);
    
    
  return (
    <div> 
              {
                    collectinfo.map((chat,index)=>(
                        <ChatMessage key={index} chat={chat}   />
                    ))
                   }

    </div>
  )
}

export default Collectinfo











