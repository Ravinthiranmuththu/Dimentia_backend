import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import SignUpFormField from './SignUpFormField';
import SquareButton from './SquareButton';

const SignUpForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [slmcID, setSlmcID] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSignUp = async () => {
    if (!firstName || !lastName || !email || !slmcID || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const userData = {
      email: email,
      first_name: firstName,
      last_name: lastName,
      slmc_id: slmcID,
      password: password,
      re_enter_password: confirmPassword,
      user_type: "doctor", // <-- Added here

    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('User registered successfully:', data);
        // Redirect to login page after successful sign-up
        navigate('/');
      } else {
        console.error('Error during signup:', data);
        alert(data.error || data.message || JSON.stringify(data)); // 👈 Updated alert
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Something went wrong. Please try again.');
    }
  };

  return (
    <div
      className="w-full flex justify-center items-center min-h-screen bg-cover bg-center px-4"
      style={{ backgroundImage: 'url(/path-to-your-background.jpg)' }}
    >
      <form
        className="w-full max-w-xl bg-black/30 backdrop-blur-sm rounded-xl px-10 py-12 space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignUp();
        }}
      >
        <h2 className="text-3xl font-bold text-white text-center mb-4">Create Your Account</h2>

        <SignUpFormField
          label="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          inputClassName="rounded-full text-base py-3"
          labelClassName="text-white text-sm"
        />

        <SignUpFormField
          label="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          inputClassName="rounded-full text-base py-3"
          labelClassName="text-white text-sm"
        />

        <SignUpFormField
          label="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          inputClassName="rounded-full text-base py-3"
          labelClassName="text-white text-sm"
        />

        <SignUpFormField
          label="Sri Lanka Medical Council ID"
          value={slmcID}
          onChange={(e) => setSlmcID(e.target.value)}
          placeholder="SLMC ID"
          inputClassName="rounded-full text-base py-3"
          labelClassName="text-white text-sm"
        />

        <SignUpFormField
          label="New Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          inputClassName="rounded-full text-base py-3"
          labelClassName="text-white text-sm"
        />

        <SignUpFormField
          label="Re-Enter Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
          inputClassName="rounded-full text-base py-3"
          labelClassName="text-white text-sm"
        />

        <div className="flex justify-end pt-2">
          <SquareButton
            text="Sign Up"
            onClick={handleSignUp}
            className="px-10 py-4 text-base rounded-md bg-white text-black font-semibold hover:bg-gray-200 transition"
          />
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
