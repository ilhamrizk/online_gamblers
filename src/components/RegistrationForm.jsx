import React, { useState } from 'react';
import Popup from './Popup';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        ktp: '',
        fullName: '',
        email: '',
        phone: '',
        dob: '',
        address: '',
        username: '',
        password: '',
        securityQuestion: '',
        securityAnswer: ''
    });
    const [popup, setPopup] = useState({ isOpen: false, message: '', isSuccess: false });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.ktp.endsWith('9999')) {
            showPopup('Your ID is detected as an online gambler, so you can\'t complete the registration.', false);
            return;
        }

        if (formData.password.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        console.log('Form Submitted', formData);
        showPopup('Your registration was successful!', true);
        setFormData({
            ktp: '',
            fullName: '',
            email: '',
            phone: '',
            dob: '',
            address: '',
            username: '',
            password: '',
            securityQuestion: '',
            securityAnswer: ''
        });
    };

    const showPopup = (message, isSuccess) => {
        setPopup({ isOpen: true, message, isSuccess });
    };

    const closePopup = () => {
        setPopup({ ...popup, isOpen: false });
    };

    return (
        <div className="registration-container">
            <h2>Bank Registration</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="ktp">ID Number (KTP)</label>
                <input type="text" id="ktp" name="ktp" value={formData.ktp} onChange={handleChange} required />

                <label htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} required />

                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                <label htmlFor="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />

                <label htmlFor="dob">Date of Birth</label>
                <input type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />

                <label htmlFor="address">Address</label>
                <textarea id="address" name="address" value={formData.address} onChange={handleChange} required></textarea>

                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} required />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required />

                <label htmlFor="securityQuestion">Security Question</label>
                <select id="securityQuestion" name="securityQuestion" value={formData.securityQuestion} onChange={handleChange} required>
                    <option value="motherMaidenName">What is your mother's maiden name?</option>
                    <option value="firstPet">What was the name of your first pet?</option>
                    <option value="firstSchool">What was the name of your first school?</option>
                </select>

                <label htmlFor="securityAnswer">Security Answer</label>
                <input type="text" id="securityAnswer" name="securityAnswer" value={formData.securityAnswer} onChange={handleChange} required />

                <button type="submit">Register</button>
            </form>
            <Popup isOpen={popup.isOpen} message={popup.message} isSuccess={popup.isSuccess} onClose={closePopup} />
        </div>
    );
};

export default RegistrationForm;