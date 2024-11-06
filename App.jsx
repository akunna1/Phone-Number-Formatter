import React, { useState } from 'react';

const PhoneInput = () => {
    // phoneNumber is the value, setPhoneNumber will be us used in if/else if statement
    const [phoneNumber, setPhoneNumber] = useState('');

    // handlePhoneChange Function
    const handlePhoneChange = (event) => {
        // value is defined
        const value = event.target.value.replace(/[^\d]/g, '');

        if (value.length > 10) {
            // formatting by length
            setPhoneNumber(`(${value.slice(0, 3)})-${value.slice(3, 6)}-${value.slice(6, 10)}`);
        } else if (value.length === 10) {
            setPhoneNumber(`(${value.slice(0, 3)})-${value.slice(3, 6)}-${value.slice(6)}`);
        } else if (value.length >= 7) {
            setPhoneNumber(`(${value.slice(0, 3)})-${value.slice(3, 6)}-${value.slice(6)}`);
        } else if (value.length >= 4) {
            setPhoneNumber(`(${value.slice(0, 3)})-${value.slice(3)}`);
        } else {
            setPhoneNumber(value);
        }
    };

    return (
        <div>
            <label htmlFor="phone">Phone Number:</label>
            <input
                type="text"
                id="phone"
                value={phoneNumber}
                onChange={handlePhoneChange}
                maxLength="14"
                placeholder="(xxx)-xxx-xxxx"
            />
        </div>
    );
};

export default PhoneInput;
