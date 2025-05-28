import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddDevice.css';
import closeIcon from './close.png'; // Make sure to import the close image

const AddDevice = () => {
    const api = process.env.REACT_APP_API;
    const [deviceName, setDeviceName] = useState('');
    const [deviceType, setDeviceType] = useState('');
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const userId = localStorage.getItem('userName');

        if (!userId) {
            alert("User ID not found. Please log in.");
            navigate('/');
            return;
        }

        axios.post(`${api}/api/user/devices/`,
            { deviceName, deviceType, status },
            { withCredentials: true })
            .then(response => {
                if (response.data.success) {
                    navigate('/dashboard'); // Redirect to dashboard after successful addition
                } else {
                    alert("Failed to add device");
                }
            })
            .catch(err => {
                console.error("Error adding device", err);
            });
    };

    const handleClose = () => {
        navigate('/dashboard'); // Navigate back to dashboard
    };

    return (
        <div className="add-device-container">
            <img 
                src={closeIcon} 
                alt="Close" 
                className="close-button" 
                onClick={handleClose} 
            />
            <h1>Add New Device</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="deviceName">Device ID</label>
                    <input
                        type="text"
                        id="deviceName"
                        value={deviceName}
                        onChange={(e) => setDeviceName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="deviceType">Device Name</label>
                    <input
                        type="text"
                        id="deviceType"
                        value={deviceType}
                        onChange={(e) => setDeviceType(e.target.value)}
                        required
                    />
                </div>
                {/* <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <input
                        type="text"
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        required
                    />
                </div> */}
                <button type="submit">Add Device</button>
            </form>
        </div>
    );
};

export default AddDevice;
