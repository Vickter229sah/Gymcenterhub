import React, { useState } from 'react';
import laptop from "../assets/bod.png";
import "./contact.css"; 
import emailjs from '@emailjs/browser';


const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');


  const handleSubmit = (e) => {
      e.preventDefault();

      const serviceId = 'service_qybxg5c';
      const templateId = 'template_7h7r77h';
      const publicKey = 'Pgl_3Naj6qTeYqhAV';

      const templateParams = {
          from_name: name,
          from_email: email,
          from_phone: phone,
          from_subject: subject,
          to_name : 'Vickter',
          message: message,
      };

      emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response)=> {
           console.log('Email sent successfully to ', + serviceId +  response);
           setName('');
           setEmail('');
           setMessage('');
           setPhone('');
           setSubject('');
       
      })
      .catch((error) => {
           console.error('Error sending email', error);
       });



  }




  return (
    <div className="bg-yellow-100 w-full h-full flex justify-center">
      <div className="max-w-[1240px]  mx-auto ">
        <div className="bg-[rgba(35, 78, 112, 0.8)] m-2 rounded-lg gap-9 shadow-xl my-10 py-10 px-10  grid grid-cols-1 md:grid-cols-2 md:gap- items-center relative overflow-hidden">
          <div className="text-center col-span-1 rounded animate-img">
            <img
              src={laptop}
              alt="laptop"
              className="w-full h-full object-cover rounded-xl inline"
            />
          </div>
          <div className="text-center col-span-1">
            <h1 className="text-3xl  font-bold text-yellow-600 underline ">
              Contact Us
            </h1>
            <h2 className="  font-bold ">
              We build relationships and reach clients worldwide.
            </h2>



           
            <div className="mt-6 text-black">

            <form  onSubmit={handleSubmit} className='emailform'>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-gray-400 bg-opacity-15  rounded-md py-2 px-4 mb-4 animate-inputs"
              />
              <input
                type="text"
                placeholder="Phone No."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-gray-400 bg-opacity-15  rounded-md py-2 px-4 mb-4 animate-inputs"
              />
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full bg-gray-400 bg-opacity-15  rounded-md py-2 px-4 mb-4 animate-inputs"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-400 bg-opacity-15  rounded-md py-2 px-4 mb-4 animate-inputs"
              />
              <textarea
                placeholder="Message"
                cols ="10"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className=" w-full bg-gray-400 bg-opacity-15 rounded-md py-2 px-4 mb-4 animate-inputs"
              ></textarea>

              <button type="submit" className="relative inline-flex items-center justify-center  rounded-full bg-yellow-400 opacity-75 text-black py-2 px-4 hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                <span className="animate-ping absolute inline-flex h-9 w-8 rounded-full bg-yellow-500 opacity-75"></span>
                <span className="relative z-10">Submit</span>
              </button>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
