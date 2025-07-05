import React, { useState } from 'react';

const Newslatter = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for form submission here (e.g., API call or email submission)
    alert(`Subscribed with email: ${email}`);
  };

  return (
    <div className="w-full max-w-[600px]  mt-10 mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">Subscribe to Our Newsletter</h1>
      <p className="text-center text-sm mb-6 text-gray-600">Get daily news on upcoming offers from many suppliers all over the world.</p>
      <form onSubmit={handleSubmit} className="flex justify-center items-center space-x-4">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Enter your email"
          required
          className="px-4 py-2 bg-white rounded-md w-3/4"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Send
        </button>
      </form>
    </div>
  );
};

export default Newslatter;
