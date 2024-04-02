import registrationImage from '../assets/bod2.png'; 
import { Link, useNavigate } from 'react-router-dom';
import './RegisterForm.css';
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // Updated import statement
import { auth } from './firebase';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false); // State to track sign-up success
  const navigate = useNavigate(); // Get navigate function from useNavigate hook

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        console.log('Operation type:', userCredential.operationType); // Display operation type

        // Set signupSuccess to true when sign up is successful
        setSignupSuccess(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // If signupSuccess is true, show alert and redirect to login page
  if (signupSuccess) {
    alert('Sign up successful! Please log in.');
    // Reset signupSuccess state to false after showing the alert
    setSignupSuccess(false);
    // Redirect to the login page
    navigate('/login');
  }

  return (
    <div className="bg-blue-200 flex justify-center items-center min-h-screen">
      <div className="w-full sm:w-3/4 md:max-w-720 bg-blue-200 rounded-lg shadow-lg flex flex-col sm:flex-row justify-between register-form-container">
        {/* Left side - Input fields */}
        <div className="w-full sm:w-1/2 p-8 register-form-left">
          <h2 className="text-3xl font-bold text-[#332F64] mb-8">SIGN UP :</h2>
          <form onSubmit={signUp} >
            <div className="mb-4">
              <label htmlFor="username" className="block font-medium text-xl text-[#332F64] mb-2">Username<span className='text-red-600'>*</span></label>
              <input type="text" id="username" name="username" className="w-full px-3 py-2 border-4 border-[#332F64] rounded-md animated-input" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium text-[#332F64] text-xl mb-2">Email<span className='text-red-600'>*</span></label>
              <input type="email" id="email" name="email"  value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border-4 border-[#332F64] rounded-md animated-input" />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium text-[#332F64] text-xl mb-2">Password <span className='text-red-600'>*</span></label>
              <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 border-4 border-[#332F64] rounded-md animated-input" />
            </div>
            <div className="mb-6">
              <label htmlFor="retypePassword" className="block font-medium text-[#332F64] text-xl mb-2">Retype-Password <span className='text-red-600'>*</span></label>
              <input type="password" id="retypePassword" name="retypePassword" className="w-full px-3 py-2 border-4 border-[#332F64] rounded-md animated-input" />
            </div>
            <Link to="/login" className="text-blue-500 hover:underline">I've an account !</Link>
            <button type="submit" className="bg-[#332F64] text-white py-2 px-8 rounded-full mt-4 sm:mt-0 sm:ml-4 hover:bg-blue-600 focus:outline-none focus:bg-[#332F64] animated-button">Register</button>
          </form>
        </div>
        {/* Right side - Image */}
        <div className="w-full sm:w-1/2 register-form-right mr-[-5%] ">
          <img src={registrationImage} alt="Registration" className="w-xl h-full object-cover rounded-r-lg animated-image" />
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
