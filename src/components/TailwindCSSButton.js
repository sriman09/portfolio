import React from 'react'
const TailwindCSSButton = ({children}) => {
    return(
      <button className="text-white bg-red-500 hover:bg-red-600 px-10 py-2 shadow-lg">
        {children}
      </button>
    )
}

export default TailwindCSSButton