import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
     <div className="card_data" key={props.id}>
        <img src={props.imgsrc} alt="" />
        <h1>{props.title}</h1>
        <p>{props.cap}</p>
        <button>{props.btn}</button>
     </div>
    </div>
  )
}
export default Card;