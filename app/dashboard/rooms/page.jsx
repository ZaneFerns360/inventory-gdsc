import Link from 'next/link'
import React from 'react'
export default function page() {
  return (
    <div className="flex items-center justify-center py-4 my-4">
    <div className="flex flex-col mx-4" >
      <div className="collapse bg-base-200 my-4 mx-auto">
        <input type="radio" name="my-accordion-1" defaultChecked /> 
        <div className="collapse-title text-xl font-bold">
          Humanities & Sciences
        </div>
        <div className="collapse-content flex flex-col"> 
          <Link className="my-2 text-xl" href="#">Physics Lab</Link>
          <Link className="my-2 text-xl" href="#">Chemistry Lab</Link>
        </div>      
      </div>
      <div className="collapse  my-4 bg-base-200">
        <input type="radio" name="my-accordion-1" /> 
        <div className="collapse-title text-xl font-bold">
        COMPUTER ENGINEERING
        </div>
        <div className="collapse-content flex flex-col"> 
        <Link className="my-2 text-xl" href="#">Lab 601</Link>
        <Link className="my-2 text-xl" href="#">Lab 602</Link>
        <Link className="my-2 text-xl" href="#">Lab 603</Link>
        <Link className="my-2 text-xl" href="#">Lab 604</Link>
        <Link className="my-2 text-xl" href="#">Lab 609</Link>
        <Link className="my-2 text-xl" href="#">Lab 611</Link>
        <Link className="my-2 text-xl" href="#">Lab 708</Link>
        <Link className="my-2 text-xl" href="#">Lab 709</Link>
        <Link className="my-2 text-xl" href="#">Lab 710</Link>
        <Link className="my-2 text-xl" href="#">Lab 711</Link>
        </div>
      </div>
      <div className="collapse  my-4 bg-base-200">
        <input type="radio" name="my-accordion-1" /> 
        <div className="collapse-title text-xl font-bold">
          Electronics & Computer Science
        </div>
        <div className="collapse-content flex flex-col"> 
        <Link className="my-2 text-xl" href="#">Lab 203</Link>
        <Link className="my-2 text-xl" href="#">Lab 301</Link>
        <Link className="my-2 text-xl" href="#">Lab 303</Link>
        <Link className="my-2 text-xl" href="#">Lab 304</Link>
        <Link className="my-2 text-xl" href="#">Lab 309</Link>
        <Link className="my-2 text-xl" href="#">Lab 310</Link>
        <Link className="my-2 text-xl" href="#">Lab 311</Link>
        </div>
      </div>
    </div>
    <div className="flex flex-col mx-4" >
    <div className="collapse my-4 bg-base-200 mx-auto">
      <input type="radio" name="my-accordion-1" defaultChecked /> 
      <div className="collapse-title text-xl font-bold">
        Language Lab
      </div>
      <div className="collapse-content flex flex-col"> 
        <Link className="my-2 text-xl" href="#">Lab 207</Link>
      </div>   
    </div>
    <div className="collapse  my-4 bg-base-200">
      <input type="radio" name="my-accordion-1" /> 
      <div className="collapse-title text-xl font-bold">
        Artificial Intelligence & Data Science
      </div>
      <div className="collapse-content flex flex-col"> 
      <Link className="my-2 text-xl" href="#">Lab 802</Link>
      <Link className="my-2 text-xl" href="#">Lab 803</Link>
      <Link className="my-2 text-xl" href="#">Lab 804</Link>
      <Link className="my-2 text-xl" href="#">Lab 808</Link>
      <Link className="my-2 text-xl" href="#">Lab 809</Link>
      <Link className="my-2 text-xl" href="#">Lab 810</Link>
      </div>
    </div>
    <div className="collapse  my-4 bg-base-200">
      <input type="radio" name="my-accordion-1" /> 
      <div className="collapse-title text-xl font-bold">
        Mechanical Engineering
      </div>
      <div className="collapse-content flex flex-col"> 
      <Link className="my-2 text-xl" href="#">Lab 210</Link>
      <Link className="my-2 text-xl" href="#">Lab 402</Link>
      <Link className="my-2 text-xl" href="#">Lab 407</Link>
      <Link className="my-2 text-xl" href="#">Lab 409</Link>
      <Link className="my-2 text-xl" href="#">Lab 410</Link>
      </div>
    </div>
  </div>
    </div>
  )
}
