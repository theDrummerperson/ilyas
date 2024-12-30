import React, { useState } from 'react';
import { AlertCircle, Loader2, CheckCircle, Send, User, Mail, MessageSquare } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  loading: boolean;
  error: string;
  success: boolean;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>({
    loading: false,
    error: '',
    success: false
  });

  const [focused, setFocused] = useState<string>('');

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
        throw new Error(data.error || `Error: ${response.status} ${response.statusText}`);
      }

      setStatus({ loading: false, error: '', success: true });
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false }));
      }, 5000);
    } catch (error: any) {
      console.error('Form submission error:', error);
      setStatus({
        loading: false,
        error: error instanceof Error ? error.message : 'Failed to send email. Please try again.',
        success: false
      });
    }
  };

  const handleFocus = (field: string) => setFocused(field);
  const handleBlur = () => setFocused('');

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Form Container with subtle gradient background */}
      <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700">
        
        {/* Status Messages */}
        {status.error && (
          <div className="animate-slideDown p-4 bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 rounded-xl">
            <div className="flex items-center text-red-800 dark:text-red-200">
              <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
              <p className="text-sm">{status.error}</p>
            </div>
          </div>
        )}
        
        {status.success && (
          <div className="animate-slideDown p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-xl">
            <div className="flex items-center text-green-800 dark:text-green-200">
              <CheckCircle className="h-5 w-5 mr-2 flex-shrink-0" />
              <p className="text-sm">Message sent successfully!</p>
            </div>
          </div>
        )}

        {/* Name Field */}
        <div className="relative">
          <label 
            htmlFor="name" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center"
          >
            <User className="w-4 h-4 mr-2" />
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
            onFocus={() => handleFocus('name')}
            onBlur={handleBlur}
            className={`
              block w-full px-4 py-3 rounded-xl
              border ${focused === 'name' ? 'border-blue-500 ring-2 ring-blue-200 dark:ring-blue-800' : 'border-gray-300 dark:border-gray-600'}
              bg-white dark:bg-gray-800
              text-gray-900 dark:text-white
              placeholder-gray-400 dark:placeholder-gray-500
              transition-all duration-200
              focus:outline-none
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
            disabled={status.loading}
            placeholder="John Doe"
          />
        </div>

        {/* Email Field */}
        <div className="relative">
          <label 
            htmlFor="email" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center"
          >
            <Mail className="w-4 h-4 mr-2" />
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
            onFocus={() => handleFocus('email')}
            onBlur={handleBlur}
            className={`
              block w-full px-4 py-3 rounded-xl
              border ${focused === 'email' ? 'border-blue-500 ring-2 ring-blue-200 dark:ring-blue-800' : 'border-gray-300 dark:border-gray-600'}
              bg-white dark:bg-gray-800
              text-gray-900 dark:text-white
              placeholder-gray-400 dark:placeholder-gray-500
              transition-all duration-200
              focus:outline-none
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
            disabled={status.loading}
            placeholder="john@example.com"
          />
        </div>

        {/* Message Field */}
        <div className="relative">
          <label 
            htmlFor="message" 
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
            onFocus={() => handleFocus('message')}
            onBlur={handleBlur}
            rows={5}
            className={`
              block w-full px-4 py-3 rounded-xl
              border ${focused === 'message' ? 'border-blue-500 ring-2 ring-blue-200 dark:ring-blue-800' : 'border-gray-300 dark:border-gray-600'}
              bg-white dark:bg-gray-800
              text-gray-900 dark:text-white
              placeholder-gray-400 dark:placeholder-gray-500
              transition-all duration-200
              focus:outline-none
              resize-none
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
            disabled={status.loading}
            placeholder="Write your message here..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status.loading}
          className="
            w-full px-6 py-3 mt-4
            flex items-center justify-center
            bg-gradient-to-r from-blue-500 to-blue-600
            hover:from-blue-600 hover:to-blue-700
            dark:from-blue-600 dark:to-blue-700
            dark:hover:from-blue-700 dark:hover:to-blue-800
            text-white font-medium
            rounded-xl
            transform transition-all duration-200
            hover:scale-[1.02]
            focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
          "
        >
          {status.loading ? (
            <>
              <Loader2 className="animate-spin mr-2 h-5 w-5" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}