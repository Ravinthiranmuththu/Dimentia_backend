import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import bgImage from '../assets/left-container.jpg';
import { UserPlus, Search, UserMinus, UserCog, X } from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-2xl shadow-lg w-96 p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">{title}</h2>
        <div className="space-y-3">{children}</div>
      </div>
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(null);
  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    address: '',
    emergencyContact: '',
    medicalHistory: '',
  });

  const [username, setUsername] = useState('');

  const apiUrl = 'http://127.0.0.1:8000/api/patients/';

  const openModal = (type) => setModalOpen(type);
  const closeModal = () => {
    setModalOpen(null);
    setForm({
      email: '',
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      address: '',
      emergencyContact: '',
      medicalHistory: '',
    });
    setUsername('');
  };

  const handleAdd = async () => {
    const payload = {
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      age: form.age,
      gender: form.gender,
      address: form.address,
      emergency_contact: form.emergencyContact,
      medical_history: form.medicalHistory,
    };

    try {
      const response = await axios.post(apiUrl, payload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('access_Token')}`,
        },
      });

      if (response.status === 201) {
        const { username, password } = response.data;
        alert(`Patient registered!\nUsername: ${username}\nPassword: ${password}`);
        closeModal();
      }
    } catch (error) {
      console.error('Error adding patient:', error.response?.data || error.message);
      alert(`Error adding patient: ${JSON.stringify(error.response?.data || error.message)}`);
    }
  };

  return (
    <>
      <NavBar />
      <div className="w-full bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="flex items-center justify-center min-h-[calc(100vh-64px)] bg-black bg-opacity-50 px-4 py-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Add', icon: <UserPlus />, type: 'Add' },
              { label: 'Search', icon: <Search />, type: 'Search' },
              { label: 'Update', icon: <UserCog />, type: 'Update' },
              { label: 'Remove', icon: <UserMinus />, type: 'Remove' },
            ].map(({ label, icon, type }) => (
              <button
                key={type}
                className="w-36 h-36 flex flex-col items-center justify-center rounded-xl bg-custom-blue text-white hover:bg-white hover:text-custom-blue transition text-base font-medium"
                onClick={() => openModal(type)}
              >
                <div className="w-8 h-8 mb-2">{icon}</div>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Add Patient Modal */}
      <Modal isOpen={modalOpen === 'Add'} onClose={closeModal} title="Add Patient">
        {[
          { name: 'firstName', label: 'First Name' },
          { name: 'lastName', label: 'Last Name' },
          { name: 'email', label: 'Email' },
          { name: 'age', label: 'Age' },
          { name: 'address', label: 'Address' },
          { name: 'emergencyContact', label: 'Emergency Contact' },
          { name: 'medicalHistory', label: 'Medical History' },
        ].map(({ name, label }) => (
          <input
            key={name}
            placeholder={label}
            className="w-full border rounded-lg p-2"
            value={form[name]}
            onChange={(e) => setForm({ ...form, [name]: e.target.value })}
          />
        ))}

        <select
          className="w-full border rounded-lg p-2"
          value={form.gender}
          onChange={(e) => setForm({ ...form, gender: e.target.value })}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <button
          className="w-full bg-custom-blue text-white py-2 rounded-lg hover:bg-white hover:text-custom-blue border border-custom-blue transition"
          onClick={handleAdd}
        >
          Add Patient
        </button>
      </Modal>

      {/* Search Patient by Username Modal */}
      <Modal isOpen={modalOpen === 'Search'} onClose={closeModal} title="View Patient Profile">
        <input
          placeholder="Enter Patient Username"
          className="w-full border rounded-lg p-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          className="w-full bg-custom-blue text-white py-2 rounded-lg hover:bg-white hover:text-custom-blue border border-custom-blue transition"
          onClick={() => {
            if (username.trim()) {
              navigate(`/patient-profile/${username}`);
              closeModal();
            } else {
              alert('Please enter a username');
            }
          }}
        >
          View Profile
        </button>
      </Modal>
    </>
  );
};

export default Home;
