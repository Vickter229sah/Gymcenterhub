import registrationImage from '../assets/bod.png'; // Import your registration image
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './RegisterForm.css'; // Import CSS file for animations
import React, { useState } from 'react';
import { signInWithEmailAndPassword,  } from 'firebase/auth'; // Updated import statement

import { auth } from './firebase'; 

const LoginForm = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        console.log('Operation type:', userCredential.operationType); 
        // Display operation type

        // Check if the signed-in user's email matches the email from the signup
        const user = userCredential.user;
        if (user.email === email) {
          console.log('User email matches. Redirecting to banner page...');
          // Redirect to the banner page
          // Replace '/banner' with your actual banner page path
          window.location.href = '/banner';
        } else {
          console.log('User email does not match.');
          // Handle the case when the user's email does not match
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="bg-blue-200 flex justify-center items-center h-screen">
      <div className="w-3/4 bg-blue-200 rounded-lg shadow-lg flex justify-between register-form-container">
        {/* Left side - Input fields */}
        <div className="w-1/2 p-8 register-form-left">
          <h2 className="text-3xl font-bold text-[#332F64] mb-8">SIGN IN :</h2>
          <form onSubmit={signIn}>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium text-[#332F64] text-xl mb-2">Email<span className='text-red-600'>*</span></label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border-4 border-[#332F64] rounded-md animated-input" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium text-[#332F64] text-xl mb-2">Password <span className='text-red-600'>*</span></label>
              <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}  className="w-full px-3 py-2 border-4 border-[#332F64] rounded-md animated-input" />
            </div>
        
            {/* Make the "Don't have an account?" text clickable */}
            <Link to="/register" className="text-blue-500 hover:underline">Don't have an account?</Link>
            <button type="submit" className="bg-[#332F64] text-white py-2 px-8 rounded-full ml-44 hover:bg-blue-600 focus:outline-none focus:bg-[#332F64] animated-button">Login</button>
          </form>
        </div>
        {/* Right side - Image */}
        <div className="w-1/2 register-form-right">
          <img src={registrationImage} alt="Registration" className="w-full h-full object-cover rounded-r-lg animated-image" />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
