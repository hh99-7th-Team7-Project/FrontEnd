import React from 'react'
import { flow } from '../../shared/svg/A-index'

export const Flow = () => {
  return (
    <div class="flow-container" style={{marginTop:"68px"}}>
                <div class="flow-text">
                    <div class="flow-wrap"><img src={flow}  alt=""/> </div>
                    <div class="flow-wrap"><img src={flow} alt=""/> </div>
                    <div class="flow-wrap"><img src={flow} alt=""/></div>
                    <div class="flow-wrap"><img src={flow} alt=""/></div>
                </div>
          </div>
  )
}
