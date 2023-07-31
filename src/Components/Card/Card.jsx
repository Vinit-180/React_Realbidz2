import React from 'react'

const Card = ({img,children}) => {
  return (
    <article>
        <img src={img} alt="Image of house" height={100} width={100} />
        <div>
        {children}
        </div>
    </article>
  )
}

export default Card