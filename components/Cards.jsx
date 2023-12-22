import React from 'react';
import { HiBanknotes, HiBuildingOffice} from "react-icons/hi2";
import { BsBank } from "react-icons/bs";
import { PiPrinterFill } from "react-icons/pi";


const Cards = () => {
  return (
    <div className='p-8 flex justify-center items-center'>
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-20 p-8">
        {/* Card 1 */}
        <div className="w-full md:w-72 bg-[#0B3568] text-slate-100 rounded-lg p-8">
          <div className="card-body flex-1">
            <div className="card-actions justify-end flex">
              <BsBank className='h-10 w-10 text-white'/>
            </div>
            <h2 className="card-title">4</h2>
            <p>Total Departments</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-72 bg-[#0B3568] text-slate-100 rounded-lg p-8">
          <div className="card-body flex-1">
            <div className="card-actions justify-end flex">
              <HiBuildingOffice className='h-10 w-10 text-white' />
            </div>
            <h2 className="card-title">4</h2>
            <p>Total Rooms</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-72 bg-[#0B3568] text-slate-100 rounded-lg p-8">
          <div className="card-body flex-1">
            <div className="card-actions justify-end flex">
              <PiPrinterFill className='h-10 w-10 text-white' />
            </div>
            <h2 className="card-title">4</h2>
            <p>Total Equipment</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full md:w-72 bg-[#0B3568] text-slate-100 rounded-lg p-8">
          <div className="card-body flex-1">
            <div className="card-actions justify-end flex">
              <HiBanknotes className='h-10 w-10 text-white' />
            </div>
            <h2 className="card-title">4</h2>
            <p>Total Loans</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
