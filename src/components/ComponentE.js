import React from 'react'
import {UserContext, ChannelContext} from '../App'

export default function ComponentE() {
  return (
    //   this approach is not good. Use context hook instead
    <div>
        <UserContext.Consumer>
        
            {
                user => {
                   return <ChannelContext.Consumer>
                        {
                            channel => {return <div>Hi {user} {channel}</div>}
                        }
                    </ChannelContext.Consumer>
                }
                   
                
            }
        </UserContext.Consumer>
      ComponentE
    </div>
  )
}
