import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import Popup from './components/Popup';

const App = () => {
    const [popup, setPopup] = useState({ isVisible: false, message: '', isSuccess: false });

    const handlePopup = (message, isSuccess) => {
        setPopup({ isVisible: true, message, isSuccess });
    };

    const closePopup = () => {
        setPopup({ ...popup, isVisible: false });
    };

    return (
        <div>
            <RegistrationForm onPopup={handlePopup} />
            <Popup 
                isVisible={popup.isVisible} 
                message={popup.message} 
                isSuccess={popup.isSuccess} 
                onClose={closePopup} 
            />
        </div>
    );
};

export default App;