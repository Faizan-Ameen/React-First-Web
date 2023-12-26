import React, { useState } from 'react'
import CopyRight from './CopyRight';
const Contact = () => {

  const [data, setData] = useState({
    fullname: '',
    phone: '',
    email: '',
    msg: ''
  });

  const inpChange = (e) => {
    const { name, value } = e.target;
    setData((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      }
    })
  }
  const formSubmit = (e) => {
    e.preventDefault()
    alert(`My Full Name is: "${data.fullname}" My Phone Number is: "${data.phone}" MY Email is: "${data.email}" My Message is: "${data.msg}"`)
  }
  return (
    <div className='input_main'>
      <div className="heading">
        <h1>Contact Us</h1>
      </div>
      <form action="" onSubmit={formSubmit}>
        <div className="inp_fields">
          <label htmlFor="">FullName</label>
          <input onChange={inpChange} value={data.fullname} type="text" name="fullname" id="" required placeholder='Enter Name' />
          <label htmlFor="">Phone</label>
          <input onChange={inpChange} value={data.phone} type="tel" name="phone" id="" required placeholder='Enter Number' />
          <label htmlFor="">Email Address</label>
          <input onChange={inpChange} value={data.email} type="email " name="email" id="" required placeholder='Enter Email' />
          <textarea onChange={inpChange} value={data.msg} name="msg" id="" cols="30" rows="10" placeholder='Enter Message'></textarea>
          <button>
            Submit
            <span></span>
          </button>
        </div>
      </form>
      <CopyRight /> 
    </div>
  )
}
export default Contact;