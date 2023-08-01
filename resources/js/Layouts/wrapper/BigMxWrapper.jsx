import React from 'react'

export const BigMxWrapper = ({children,className}) => {
  return (
    <div className={`mx-1 lg:mx-56 ${className}`}>{children}</div>
  )
}
