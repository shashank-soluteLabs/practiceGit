import React from 'react'

export const HOC = (props) => {
  return (
    <div>
        <props.cmp></props.cmp>
    </div>
  )
}
