import React, { useRef, useState } from 'react'
import Button from '@mui/material/Button';
import emailjs from '@emailjs/browser';
import { CheckCircle, Phone, Email } from '@mui/icons-material';


const Contact = () => {

  const form = useRef();
  const [check, setCheck] = useState(false)
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xi34i8i', 'template_mpk4z05', form.current, 'cRp748NasVsH4sHEV')
      .then((result) => {
          console.log(result.text);
          document.getElementById("create").reset();
          setCheck(true)
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='contact'>
    <div className='contact-wrap'>
      <div className='contact-text'>
        <span className='contact-h'><h2>Contact Me</h2></span>
        <span className='contact-p'><p>If you have any questions no matter how small, feel free to contact me on the form. I will always take the time to respond, thank you. </p></span>
        <div className='contact-methods'>
        <Phone style={{margin: '0 20px', fontSize: 'xx-large', color: 'green', cursor: 'pointer'}}/>
        <Email style={{margin: '0 20px', fontSize: 'xx-large', color: 'red', cursor: 'pointer'}}/></div>
      </div>
      <div className='contact-form-div'>
        <form id='create' className='contact-form' ref={form} onSubmit={sendEmail}>
          <input placeholder='First Name' type="text" name="first_name" required></input>
          <input placeholder='Last Name' type="text" name="last_name" required></input>
          <input type="email" name="email_id" placeholder='Email' required ></input>
          <textarea name="message"  className='message' rows='3' placeholder='Message' required></textarea>
          <Button type="submit" variant="outlined" value="send" sx={{ width: 200, padding: 1, margin: 2 }} > {check ? "Thank You": "Submit"}{check ? <CheckCircle sx={{ color: 'green', marginLeft: '10px' }}/>: null} </Button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Contact