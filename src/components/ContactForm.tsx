// src/app/contact/page.tsx
'use client';
import React from 'react';

const ContactPage = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Get form elements with proper typing
    const nameInput = event.currentTarget.querySelector<HTMLInputElement>('input[name="name"]');
    const emailInput = event.currentTarget.querySelector<HTMLInputElement>('input[name="email"]');
    const messageInput = event.currentTarget.querySelector<HTMLTextAreaElement>('textarea[name="message"]');

    if (!nameInput || !emailInput || !messageInput) {
      alert('Form fields not found');
      return;
    }

    const formData = {
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Email sent successfully');
      } else {
        alert('Failed to send email. Please try again.');
      }
    } catch (error) {
      alert('Failed to send email. Please try again.');
    }
  };

  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactPage;