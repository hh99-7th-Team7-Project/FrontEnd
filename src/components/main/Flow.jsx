import React from 'react'
import { flow } from '../../shared/svg/A-index'

export const Flow = () => {
  return (
    <div class="flow-container" style={{marginTop:"2px"}}>
                <div class="flow-text">
                    <div ><img src={flow}  alt=""/> </div>
                    <div ><img src={flow} alt=""/> </div>
                    <div ><img src={flow} alt=""/></div>
                    <div ><img src={flow} alt=""/></div>
                </div>
          </div>
  )
}
