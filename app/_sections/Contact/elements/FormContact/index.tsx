"use client";

import React, { useState } from "react";
import Button from "@/_sections/Button";

interface FormContactProps {
  requiredFields: {
    nameField: boolean;
    emailField: boolean;
    phoneField: boolean;
    messageField: boolean;
    mail: string;
  };
}

const FormContact: React.FC<FormContactProps> = ({ requiredFields }) => {
  const { nameField, emailField, phoneField, messageField, mail } = requiredFields;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent("New Contact Request");
    const body = encodeURIComponent(
      `Name: ${formData.name || "Not provided"}\nEmail: ${formData.email}\nPhone: ${formData.phone || "Not provided"}\n\nMessage:\n${formData.message}`
    );

    const mailtoLink = `mailto:${mail}?subject=${subject}&body=${body}`;

    // Open default mail client with pre-filled email
    window.open(mailtoLink, "_blank");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <form onSubmit={handleSendEmail} className="mx-auto grid max-w-screen-xl w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none xl:col-span-2">
      {nameField && (
        <div>
          <label htmlFor="name" className="text-base font-medium text-gray-900">Name</label>
          <div className="mt-2">
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full rounded-lg border px-4 py-3 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-primary-500 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
      )}

      {emailField && (
        <div className="sm:col-span-2">
          <label htmlFor="email" className="text-base font-medium text-gray-900">Email</label>
          <div className="mt-2">
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full rounded-lg border px-4 py-3 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-primary-500 sm:text-sm sm:leading-6"
              placeholder="Enter your email"
            />
          </div>
        </div>
      )}

      {phoneField && (
        <div className="sm:col-span-2">
          <label htmlFor="phone" className="text-base font-medium text-gray-900">Phone</label>
          <div className="mt-2">
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full rounded-lg border px-4 py-3 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-primary-500 sm:text-sm sm:leading-6"
              placeholder="Enter your phone number"
            />
          </div>
        </div>
      )}

      {messageField && (
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-base font-medium text-gray-900">Message</label>
          <div className="mt-2">
            <textarea
              name="message"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="block w-full rounded-lg border px-4 py-3 text-gray-900 shadow-sm ring-1 ring-gray-300 focus:ring-2 focus:ring-primary-500 sm:text-sm sm:leading-6"
              placeholder="Enter your message"
            />
          </div>
        </div>
      )}

      <div>
        <Button label="Send Message" className="mt-6" onClick={handleSendEmail} />
      </div>
    </form>
  );
};

export default FormContact;
