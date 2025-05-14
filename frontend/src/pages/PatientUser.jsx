import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ProfileSection from '../components/ProfileSection';
import axios from 'axios';

const PatientUser = () => {
  const { username } = useParams(); // Grab username from URL
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPatientProfile = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/patient-profile/${username}/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_Token')}`,
        },
      });
      console.log('Fetched profile:', response.data);
      setProfile(response.data); // The response is set directly, which contains the profile data.
    } catch (error) {
      setError('Failed to fetch patient profile.');
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatientProfile();
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!profile) {
    return <div>No profile found for this patient.</div>;
  }

  return (
    <div>
      <NavBar />
      <div className="pt-20 px-6">
        <ProfileSection profile={profile} />
      </div>
    </div>
  );
};

export default PatientUser;
