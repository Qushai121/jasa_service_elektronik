import React from 'react'

export const BigMxWrapper = ({children,className}) => {
  return (
    <div className={`mx-1 xl:mx-56 ${className}`}>{children}</div>
  )
}
