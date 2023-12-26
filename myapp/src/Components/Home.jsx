import React from 'react';
import './style.css';
import CopyRight from './CopyRight';
const Home = () => {
  return (
    <div className='home_main'>
      <div className="content_side">
      <div className="contant">
        <h1>Grow your business with <br /> <span>Mr Faizan</span></h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellendus ad quia impedit fugiat in?</p>
        <button>Get Started</button>
      </div>
      <div className="img">
        <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?size=626&ext=jpg&ga=GA1.1.991215353.1703498016&semt=sph" alt="" />
      </div>
      </div>
      <CopyRight />
    </div>
  )
}
export default Home;