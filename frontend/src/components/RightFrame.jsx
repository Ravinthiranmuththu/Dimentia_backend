import React, { useState } from 'react';
import FormField from './FormField.jsx';
import { useNavigate } from 'react-router-dom';
import SquareButton from './SquareButton.jsx';

const RightFrame = () => {
  const [slmcID, setSlmcID] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!slmcID || !password) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await fetch('http://127.0.0.1:8000/api/doctor-login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slmc_id: slmcID, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('access_Token', data.access_token);
        localStorage.setItem('refresh_Token', data.refresh_token);
        navigate('/home');
      } else {
        alert(data.detail || 'Login failed.');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Network error. Please try again.');
    }
  };

  const handleSignUp = () => {
    navigate('/SignUp');
  };

  return (
    <div className="flex items-center h-full w-full">
      <form className="flex-auto p-6" onSubmit={handleSubmit}>
        <FormField
          label="Sri Lanka Medical Council ID"
          value={slmcID}
          onChange={(e) => setSlmcID(e.target.value)}
          placeholder="SLMC ID"
        />
        <FormField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />

        <div className="flex-1 border-b border-custom-blue mb-10 mt-10"></div>

        <SquareButton
          text="Log In"
          type="submit"
          variant="secondary"
          className="w-full h-12 mt-4 border border-custom-blue bg-custom-blue text-white rounded-lg font-semibold transition-all hover:bg-white hover:text-custom-blue"
        />

        <SquareButton
          text="Sign Up"
          onClick={handleSignUp}
          variant="secondary"
          className="w-full h-12 mt-4 border border-custom-blue text-custom-blue rounded-lg font-semibold transition-all hover:bg-custom-blue hover:text-white"
        />
      </form>
    </div>
  );
};

export default RightFrame;
