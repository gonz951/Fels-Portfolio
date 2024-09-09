import '../components/styles/pages.css';
import React, { useState } from 'react';

export default function ContactPage() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = validateForm(formData);
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log('Form submitted successfully.');
        } else {
            console.log('Form submission failed due to validation errors.');
        }
    };

    const validateForm = (data) => {
        const errors = {};

        if (!data.name.trim()) {
            errors.name = 'Your name is required.'
        } else if (data.name.length < 2) {
            errors.name = 'Please enter a name.'
        }

        if (!data.email.trim()) {
            errors.email = 'An Email is required'; 
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'This Email is invalid.';
        }

        if (!data.message) {
            errors.message = 'A message is required.'
        } else if (data.message.length < 10) {
            errors.message = 'Message must at least be a sentence long.'
        }

        return errors;
    }

    return (
        <div className='card'>
         <h2>Contact Me</h2>
         <p>
            <form onSubmit={handleSubmit} className='contact'>
                <label>Name:</label>
                <input 
                    placeholder='Enter name'
                    type='text'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && (
                    <span className='error-message'>
                        {/* NEED TO MAKE THIS CLASS!! */}
                        {errors.name}
                    </span>
                )}
                <label>Email:</label>
                <input 
                    placeholder='Enter email'
                    type='text'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && (
                    <span className='error-message'>
                        {errors.email}
                    </span>
                )}
                <label>Message:</label>
                <textarea 
                    placeholder='Enter a message!'
                    name='message'
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                {errors.message && (
                    <span className='error-message'>
                        {errors.message}
                    </span>
                )} 
                <button type='submit'>Submit</button>
            </form>
         </p>
        </div>
    );
}