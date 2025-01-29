import React, { useState } from "react";

const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [emailWarning, setEmailWarning] = useState("");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    if (!value.includes("@")) {
      setEmailWarning("Email must include @");
    } else {
      setEmailWarning("");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 w-full">
      <div className="w-full px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Contact Us</h2>
        <form className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg w-full">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={handleEmailChange}
            />
            {emailWarning && <p className="text-red-500 text-xs italic">{emailWarning}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows="5"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;  