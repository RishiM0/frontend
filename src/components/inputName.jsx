import { useState } from 'react'

const Name = ({value, change}) => {
    return (
        <div>
            name: <input 
            value={value}
            onChange={change}
          />
        </div>
    )
}

export default Name