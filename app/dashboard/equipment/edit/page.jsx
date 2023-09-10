import React from 'react';
import './Form.css';

const Form = () => {
  return (
    <div className="flex justify-center mt-12">
      <form className="border border-black p-8 rounded bg-white">
        <div className="flex justify-between">
          <div className="mr-4">
            <label className="block mb-2 font-bold text-072140 font-mono" htmlFor="entry1">Item Name</label>
            <input className="block w-full border border-gray-500 rounded py-2 px-4 mb-4 text-black font-mono" id="entry1" type="text" />
            <label className="block mb-2 font-bold text-072140 font-mono" htmlFor="entry2">Brand</label>
            <input className="block w-full border border-gray-500 rounded py-2 px-4 mb-4 text-black font-mono" id="entry2" type="text" />
            <label className="block mb-2 font-bold text-072140 font-mono" htmlFor="entry3">Department</label>
            <select className="block w-full border border-black rounded py-2 px-4 text-black font-mono" id="entry3">
              <option value="option1">Computer</option>
              <option value="option2">Ecs</option>
              <option value="option3">Mechanical</option>
              <option value="option4">Ai&Ds</option>
            </select>
          </div>
          <div> 
              <label className="block mb-2 font-bold text-072140 font-mono" htmlFor="entry4">In-Date</label>
              <input className="block w-full border border-black rounded py-2 px-4 text-black font-mono" id="entry4" type="date" />
              <label className="block mb-2 font-bold text-072140 font-mono" htmlFor="entry5">Quantity</label>
              <input className="block w-full border border-gray-500 rounded py-2 px-4 text-black font-mono" id="entry5" type="number" />
          </div>
        </div>
        <div className="flex justify-center">
          <button className="bg-072140 hover:bg-blue-700 border border-black text-white font-bold py-2 px-4 rounded mt-4" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;