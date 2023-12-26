import { useState } from 'react'

const Number = ({value, change}) => {
    return (
        <div>
          number: <input
          value={value}
          type="text"
          pattern="[0-9]*"
          onChange={change}></input>
        </div>
    )
}

export default Number