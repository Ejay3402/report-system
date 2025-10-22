import React from 'react'
import { BiMessage, BiPhone } from 'react-icons/bi'
import { MdEmail } from 'react-icons/md'

import './../styles/messages.scss';

const Messages = () => {
  return (
    <div className='message'>
        <h3>Communication Tools</h3>

        <div className="contacts">
            <BiMessage className='co-io'/>
            <MdEmail className='co-io'/>
            <BiPhone className='co-io' />
        </div>

    </div>
  )
}

export default Messages