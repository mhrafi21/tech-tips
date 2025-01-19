import React from 'react'

const ContainerDefault = ({children}:{children: React.ReactNode}) => {
  return (
    <div className='className="container mx-auto max-w-7xl  px-6 flex-grow"'>
        {children}
    </div>
  )
}

export default ContainerDefault;