"use client"
import { useState, ChangeEvent, FormEvent } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    additional_message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        alert('Email sent successfully');
        window.location.reload(); // Refresh the page on successful send
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <main className="bg-white text-black h-screen overflow-hidden">
      <div className="grid bg-white md:grid-cols-2 gap-2">
        <div className="grid grid-cols-2 gap-2 h-fit p-6 pt-10">
          <h1 className="text-3xl font-bold col-span-2 mb-6">Send us a message</h1>
          <form onSubmit={handleSubmit} className="grid gap-2">
            <div className="flex-col flex gap-2">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                required
                className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-700"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="flex-col flex gap-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-700"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="flex-col col-span-2 flex gap-2">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                required
                id="phone"
                className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-700"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="md:col-span-2 flex flex-col gap-2">
              <label htmlFor="additional_message">Additional message</label>
              <textarea
                name="additional_message"
                id="additional_message"
                className="h-28 w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-700"
                value={formData.additional_message}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="my-2 md:col-span-2 col-span-1 text-white flex justify-center items-center">
              <button type="submit" className="w-full md:w-2/5 p-2 text-lg bg-blue-700 rounded-full">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="col-span-1">
          <Image
            src="/customer_service.webp"
            width={1000}
            height={760}
            className="hidden md:block rounded-lg duration-300 hover:scale-95"
            alt="Customer service team assisting clients"
          />
        </div>
      </div>
    </main>
  );
}
