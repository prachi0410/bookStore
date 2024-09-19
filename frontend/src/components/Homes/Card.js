import React from 'react';
import './card.css'
const Card = ({item}) => {
  return (<>
    <div className="card">
    <img className='card-image'
      src={item.image}
      alt="Shoes" />
  
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <span className="badge-new">{item.category}</span>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions">
      <span className="badge-fasion">₹ {item.price}</span>
      <span className="badge-products">Buy Now</span>
    </div>
  </div>
</div>
  </>);
}

export default Card;
