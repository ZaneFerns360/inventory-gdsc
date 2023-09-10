import React from 'react';

const Cards = () => {
  return (
    <div className='p-5 my-10 flex justify-center items-center'>
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-10">
        {/* Card 1 */}
        <div className="w-full md:w-72 bg-[#0B3568] text-slate-100 rounded-lg">
          <div className="card-body flex-1">
            <div className="card-actions justify-end flex">
              <span>Logo</span>
            </div>
            <h2 className="card-title">4</h2>
            <p>Total Departments</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-72 bg-[#0B3568] text-slate-100 rounded-lg">
          <div className="card-body flex-1">
            <div className="card-actions justify-end flex">
              <span>Logo</span>
            </div>
            <h2 className="card-title">4</h2>
            <p>Total Rooms</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-72 bg-[#0B3568] text-slate-100 rounded-lg">
          <div className="card-body flex-1">
            <div className="card-actions justify-end flex">
              <span>Logo</span>
            </div>
            <h2 className="card-title">4</h2>
            <p>Total Equipment</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="w-full md:w-72 bg-[#0B3568] text-slate-100 rounded-lg">
          <div className="card-body flex-1">
            <div className="card-actions justify-end flex">
              <span>Logo</span>
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
