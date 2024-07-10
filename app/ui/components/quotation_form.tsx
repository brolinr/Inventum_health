"use client"
import { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  number_of_personnel: string;
  address: string;
  vision_screening: boolean;
  audiometry_test: boolean;
  xrays: boolean;
  drug_test: boolean;
  spirometry: boolean;
  fitness_certificate: boolean;
  food_handlers: boolean;
  equipment_rental: boolean;
  env_training: boolean;
  additional_message: string;
}

const QuotationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    number_of_personnel: '',
    address: '',
    vision_screening: false,
    audiometry_test: false,
    xrays: false,
    drug_test: false,
    spirometry: false,
    fitness_certificate: false,
    food_handlers: false,
    equipment_rental: false,
    env_training: false,
    additional_message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [id]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [id]: value,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/quote-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        alert('Email sent successfully');
        window.location.reload();
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error(error);
      alert(`Something went wrong, our team are working on it.`);
    }
  };

  return (
    <div className="w-full p-4">
      <h1 className="text-3xl mb-4 text-center">
        GET A <span className="font-bold text-blue-700">FREE QUOTE</span>
      </h1>

      <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
        <div className="flex-col flex gap-2">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-700"
            value={formData.name}
            onChange={handleChange}
            required
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
            required
          />
        </div>

        <div className="flex-col flex gap-2">
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-700"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex-col flex gap-2">
          <label htmlFor="number_of_personnel">Number of personnel</label>
          <input
            type="number"
            id="number_of_personnel"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-700"
            value={formData.number_of_personnel}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex-col flex gap-2">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-700"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="vision_screening"
            className="border border-gray-300 rounded focus:outline-none focus:border-blue-700"
            checked={formData.vision_screening}
            onChange={handleChange}
          />
          <label htmlFor="vision_screening">Vision screening</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="audiometry_test"
            className="border border-gray-300 rounded focus:outline-none focus:border-blue-700"
            checked={formData.audiometry_test}
            onChange={handleChange}
          />
          <label htmlFor="audiometry_test">Audiometry test</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="xrays"
            className="border border-gray-300 rounded focus:outline-none focus:border-blue-700"
            checked={formData.xrays}
            onChange={handleChange}
          />
          <label htmlFor="xrays">Xrays</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="drug_test"
            className="border border-gray-300 rounded focus:outline-none focus:border-blue-700"
            checked={formData.drug_test}
            onChange={handleChange}
          />
          <label htmlFor="drug_test">Multi Drug testing</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="spirometry"
            className="border border-gray-300 rounded focus:outline-none focus:border-blue-700"
            checked={formData.spirometry}
            onChange={handleChange}
          />
          <label htmlFor="spirometry">Spirometry test/Lung function testing</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="fitness_certificate"
            className="border border-gray-300 rounded focus:outline-none focus:border-blue-700"
            checked={formData.fitness_certificate}
            onChange={handleChange}
          />
          <label htmlFor="fitness_certificate">Employee Medical Certificate of Fitness</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="food_handlers"
            className="border border-gray-300 rounded focus:outline-none focus:border-blue-700"
            checked={formData.food_handlers}
            onChange={handleChange}
          />
          <label htmlFor="food_handlers">Food handler examinations</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="equipment_rental"
            className="border border-gray-300 rounded focus:outline-none focus:border-blue-700"
            checked={formData.equipment_rental}
            onChange={handleChange}
          />
          <label htmlFor="equipment_rental">Medical screening equipment rental</label>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="env_training"
            className="border border-gray-300 rounded focus:outline-none focus:border-blue-700"
            checked={formData.env_training}
            onChange={handleChange}
          />
          <label htmlFor="env_training">Occupational Health, Safety & Environmental Training</label>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="additional_message">Additional message</label>
          <textarea
            name="additional_message"
            id="additional_message"
            className="h-28 w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-700"
            value={formData.additional_message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="my-2 text-white">
          <button type="submit" className="w-full p-2 text-lg bg-blue-700 rounded-full">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuotationForm;
