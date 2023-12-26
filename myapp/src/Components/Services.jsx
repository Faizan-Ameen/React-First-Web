import React from 'react';
import Card from './Card';
import CardData from './CardData';
import CopyRight from './CopyRight'
const Services = () => {
  return (
    <div className='services'>
      <h1>Services</h1>
      <div className="service_card">
        {
          CardData.map((val) => {
            return(
              <Card 
              key = {val.id}
              imgsrc= {val.imgsrc}
              title={val.title}
              cap={val.cap}
              btn={val.btn}
              />
            )
          
          })
        }
        <CopyRight />
      </div>
    </div>
  )
}
export default Services;