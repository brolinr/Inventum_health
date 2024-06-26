export default function QuotationForm() {
  return (
    <div className="w-full p-4">
      <h1 className="text-3xl mb-4 text-center">
        GET A <span className="font-bold text-blue-700">FREE QUOTE</span>
      </h1>

      <form className="grid md:grid-cols-2 grid-cols-1 gap-4" action="" method="post">
        <div className="md:col-span-2 flex-col flex gap-2">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-700" />
        </div>

        <div className="flex-col flex gap-2">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-700" />
        </div>

        <div className="flex-col flex gap-2">
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-700" />
        </div>

        <div className="flex-col flex gap-2">
          <label htmlFor="number_of_personnel">Number of personnel</label>
          <input type="number" id="number_of_personnel" className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-700" />
        </div>

        <div className="flex-col flex gap-2">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" className="p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-700" />
        </div>

        <div className="flex-row items-center flex gap-2 col-span-1">
          <input type="checkbox" id="vision_screening" className="border border-gray-300 rounded focus:outline-none focus:border-blue-700" />
          <label htmlFor="vision_screening">Vision screening</label>
        </div>

        <div className="flex-row items-center flex gap-2 col-span-1">
          <input type="checkbox" id="audiometry_test" className="border border-gray-300 rounded focus:outline-none focus:border-blue-700" />
          <label htmlFor="audiometry_test">Audiometry test</label>
        </div>

        <div className="flex-row items-center flex gap-2 col-span-1">
          <input type="checkbox" id="food_handlers" className="border border-gray-300 rounded focus:outline-none focus:border-blue-700" />
          <label htmlFor="food_handlers">Food handler examinations</label>
        </div>

        <div className="flex-row items-center flex gap-2 col-span-1">
          <input type="checkbox" id="equipment_rental" className="border border-gray-300 rounded focus:outline-none focus:border-blue-700" />
          <label htmlFor="equipment_rental">Medical screening equipment rental</label>
        </div>

        <div className="flex-row items-center flex gap-2 col-span-1">
          <input type="checkbox" id="spirometry" className="border border-gray-300 rounded focus:outline-none focus:border-blue-700" />
          <label htmlFor="spirometry">Spirometry test/Lung function testing</label>
        </div>

        <div className="flex-row items-center flex gap-2 col-span-1">
          <input type="checkbox" id="drug_test" className="border border-gray-300 rounded focus:outline-none focus:border-blue-700" />
          <label htmlFor="drug_test">Multi Drug testing</label>
        </div>

        <div className="flex-row items-center flex gap-2 col-span-1">
          <input type="checkbox" id="fitness_certificate" className="border border-gray-300 rounded focus:outline-none focus:border-blue-700" />
          <label htmlFor="fitness_certificate">Employee Medical Certificate of Fitness</label>
        </div>

        <div className="flex-row items-center flex gap-2 col-span-1">
          <input type="checkbox" id="env_training" className="border border-gray-300 rounded focus:outline-none focus:border-blue-700" />
          <label htmlFor="env_training">Occupational Health, Safety & Environmental Training</label>
        </div>

        <div className="flex-row items-center flex gap-2 col-span-1">
          <input type="checkbox" id="xrays" className="border border-gray-300 rounded focus:outline-none focus:border-blue-700" />
          <label htmlFor="xrays">Xrays</label>
        </div>

        <div className="md:col-span-2 flex flex-col gap-2">
          <label htmlFor="additional_message">Additional message</label>
          <textarea 
            name="additional_message"
            id="additional_message"
            className="h-28 w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-700"
          ></textarea>
        </div>

        <div className="my-2 md:col-span-2 col-span-1 text-white flex justify-center items-center">
          <button className="w-full md:w-2/5 p-2 text-lg bg-blue-700 rounded-full">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
