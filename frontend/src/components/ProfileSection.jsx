import React from 'react';

const ProfileSection = ({ profile }) => {
  if (!profile || !profile.patient_data) return <div>No profile data available.</div>;

  return (
    <div className="flex justify-center rounded-lg gap-0">
      <div className="bg-custom-blue pl-4 pr-8 pt-4 pb-4 rounded-lg w-full max-w-[44rem] text-left text-white border-2 border-custom-blue items-center">
        <p>
          Username: <span className="font-bold">{profile.username}</span>
        </p>
        <p>
          Gender: <span className="font-bold">{profile.patient_data.gender || 'N/A'}</span>
        </p>
        <p>
          Age: <span className="font-bold">{profile.patient_data.age}</span>
        </p>
        <p>
          Address: <span className="font-bold">{profile.patient_data.address}</span>
        </p>
        <p>
          Emergency Contact: <span className="font-bold">{profile.patient_data.emergency_contact}</span>
        </p>
        <p>
          Medical History: <span className="font-bold">{profile.patient_data.medical_history}</span>
        </p>
      </div>
    </div>
  );
};

export default ProfileSection;
