import React from 'react'

export const BigMxWrapper = ({children,className}) => {
  return (
    <div className={`lg:mx-56 ${className}`}>{children}</div>
  )
}
