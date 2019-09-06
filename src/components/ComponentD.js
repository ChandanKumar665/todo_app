import React, { useContext } from 'react'
import ComponentE from './ComponentE';
import { UserContext, ChannelContext } from '../App';


export default function ComponentD() {
    //best way to consume context
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)
  return (
    <div>
      <ComponentE/>
      hi {user} {channel}
    </div>
  )
}
