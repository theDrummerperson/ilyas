'use client';

import React, { useState } from 'react';
import { AlertCircle, Loader2, CheckCircle, Send, User, Mail, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
  subject?: string; // Added optional subject field
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
    subject: 'New Contact Form Message' // Default subject
  });

  const [status, setStatus] = useState({
    loading: false,
    error: '',
    success: false
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const maxMessageLength = 500;
  const remainingChars = maxMessageLength - formData.message.length;

  const calculateProgress = () => {
    const fields = [
      formData.name.length > 0,
      formData.email.length > 0,
      formData.message.length > 0
    ];
    return (fields.filter(Boolean).length / fields.length) * 100;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, error: '', success: false });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || `Error: ${response.status}`);
      }

      setStatus({ loading: false, error: '', success: true });
      setFormData({ 
        name: '', 
        email: '', 
        message: '', 
        subject: 'New Contact Form Message' 
      });

      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);
    } catch (error) {
      setStatus({
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to send message',
        success: false
      });
    }
  };

  return (
    <div className='max-w-md mx-auto'>
      {/* Progress bar */}
      <div className='mb-6'>
        <div className='h-1 w-full bg-gray-200 rounded-full overflow-hidden'>
          <div
            className='h-full bg-red-500 transition-all duration-500 ease-out'
            style={{ width: `${calculateProgress()}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className='space-y-6'>
        {/* Status Messages */}
        {status.error && (
          <div className='p-4 bg-red-50 border border-red-200 rounded-xl animate-shake'>
            <div className='flex items-center text-red-800'>
              <AlertCircle className='h-5 w-5 mr-2' />
              <p className='text-sm'>{status.error}</p>
            </div>
          </div>
        )}

        {status.success && (
          <div className='p-4 bg-green-50 border border-green-200 rounded-xl animate-slideIn'>
            <div className='flex items-center text-green-800'>
              <CheckCircle className='h-5 w-5 mr-2' />
              <p className='text-sm'>Message sent successfully!</p>
            </div>
          </div>
        )}

        {/* Name Field */}
        <div className='relative'>
          <label
            htmlFor='name'
            className={`block text-sm font-medium transition-colors duration-200 ${
              focusedField === 'name' ? 'text-red-600' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            Name
          </label>
          <div className='relative mt-1'>
            <User className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors duration-200 ${
              focusedField === 'name' ? 'text-red-500' : 'text-gray-400'
            }`} />
            <input
              type='text'
              id='name'
              name='name'
              required
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              onFocus={() => setFocusedField('name')}
              onBlur={() => setFocusedField(null)}
              className='pl-10 block w-full rounded-md border border-gray-300
                dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2
                text-gray-900 dark:text-white shadow-sm transition-all duration-200
                hover:border-gray-400 focus:border-red-500
                focus:outline-none focus:ring-1 focus:ring-red-500'
              placeholder='John Doe'
            />
          </div>
        </div>

        {/* Email Field */}
        <div className='relative'>
          <label
            htmlFor='email'
            className={`block text-sm font-medium transition-colors duration-200 ${
              focusedField === 'email' ? 'text-red-600' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            Email
          </label>
          <div className='relative mt-1'>
            <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 transition-colors duration-200 ${
              focusedField === 'email' ? 'text-red-500' : 'text-gray-400'
            }`} />
            <input
              type='email'
              id='email'
              name='email'
              required
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              onFocus={() => setFocusedField('email')}
              onBlur={() => setFocusedField(null)}
              className='pl-10 block w-full rounded-md border border-gray-300
                dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2
                text-gray-900 dark:text-white shadow-sm transition-all duration-200
                hover:border-gray-400 focus:border-red-500
                focus:outline-none focus:ring-1 focus:ring-red-500'
              placeholder='john@example.com'
            />
          </div>
        </div>

        {/* Message Field */}
        <div className='relative'>
          <label
            htmlFor='message'
            className={`block text-sm font-medium transition-colors duration-200 ${
              focusedField === 'message' ? 'text-red-600' : 'text-gray-700 dark:text-gray-300'
            }`}
          >
            Message
          </label>
          <div className='relative mt-1'>
            <MessageSquare className={`absolute left-3 top-3 h-5 w-5 transition-colors duration-200 ${
              focusedField === 'message' ? 'text-red-500' : 'text-gray-400'
            }`} />
            <textarea
              id='message'
              name='message'
              required
              rows={5}
              maxLength={maxMessageLength}
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              onFocus={() => setFocusedField('message')}
              onBlur={() => setFocusedField(null)}
              className='pl-10 block w-full rounded-md border border-gray-300
                dark:border-gray-600 bg-white dark:bg-gray-800 px-3 py-2
                text-gray-900 dark:text-white shadow-sm transition-all duration-200
                hover:border-gray-400 focus:border-red-500
                focus:outline-none focus:ring-1 focus:ring-red-500'
              placeholder='Your message here...'
            />
            <div className='absolute bottom-2 right-2 text-xs text-gray-400'>
              {remainingChars} characters remaining
            </div>
          </div>
        </div>

        <button
          type='submit'
          disabled={status.loading}
          className='group w-full flex justify-center items-center px-4 py-3
            bg-red-600 hover:bg-red-700 text-white font-medium rounded-md
            transition-all duration-200 disabled:opacity-50
            disabled:cursor-not-allowed focus:outline-none
            focus:ring-2 focus:ring-red-500 focus:ring-offset-2
            relative overflow-hidden'
        >
          <span className='relative z-10 flex items-center'>
            {status.loading ? (
              <>
                <Loader2 className='animate-spin mr-2 h-5 w-5' />
                Sending...
              </>
            ) : (
              <>
                <Send className='mr-2 h-5 w-5 transition-transform group-hover:translate-x-1' />
                Send Message
              </>
            )}
          </span>
        </button>
      </form>
    </div>
  );
}