import React from 'react';
import './Contact.css';

function Contact() {

  return (
    <div className="App">
    
     
       <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              width="100%"
              height="550px"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />

            <div className='contactDetails'>
                <div>
                <h2>Principle name: Anil Yadav</h2>
                <h4>Eamil id: </h4>
                <h4>Mobile Number: (+91) 8127293923</h4>
                </div>

                <div>
                <h2>Owner of School : Smt. Saraswati Devi</h2>
                <h4>Eamil id: </h4>
                <h4>Mobile Number: </h4>
                </div>
                
            </div>
            <div className='address'><h2>Address of Our School</h2>
            <pre>
               <i>Naini Laar Road Devoria (Uttar Pradesh),</i> 
               <i>School Code : 1406,</i>
               <i>District Code: 77,</i>
            </pre></div>
    </div>
  );
}

export default Contact;