import React from 'react';

const Popup = ({ message, isSuccess, onClose }) => {
    return (
        <div className="popup">
            <div className={`popup-content ${isSuccess ? 'success' : ''}`}>
                <span className="close" onClick={onClose}>&times;</span>
                <div className="alert-icon">
                    <img src={isSuccess ? 'success-svgrepo-com.svg' : 'alert-svgrepo-com.svg'} alt="Alert Icon" />
                </div>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default Popup;