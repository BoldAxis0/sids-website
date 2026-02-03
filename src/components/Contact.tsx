import React, { useState } from 'react';
import { Send } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-yellow-50 via-blue-50 to-purple-50">
      <div className="max-w-2xl mx-auto w-full">
        <h2 className="mb-12 text-3xl block w-fit mx-auto relative">
          Get In Touch
          <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-rose-300 via-amber-200 to-sky-300 rounded-full"></span>
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Have a project in mind or just want to chat? Feel free to reach out!
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-transparent resize-none"
              placeholder="Your message..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white py-3 rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow-md"
          >
            Send Message
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}