import React from 'react'

const Card = ({img,type,price,area,schemeName,location,pincode}) => {
  return (
    <div className="card p-4 m-4">
        <img src={img} alt="Image of house" height={100} width={100}
        className='card-img-top'
        />
        <div className="card-body m-2">
        <h5 className="card-title">{type}</h5>
        <p className='card-text fw-bold'>
          <span>
          &#8377;{price}
          </span>
          |{area}
        </p>
        <p className="card-text">
        <small className='text-muted'>
          {schemeName},{location}-{pincode}
        </small>
        </p>
        </div>
    </div>
  )
}

export default Card