import Link from 'next/link'
import React from 'react'
export default function page() {
  return (
    <div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" defaultChecked /> 
        <div className="collapse-title text-xl font-medium">
          Humanities & Sciences
        </div>
        <div className="collapse-content flex flex-col"> 
          <Link href="#">Physics Lab</Link>
          <Link href="#">Chemistry Lab</Link>

        </div>
        
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" /> 
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content"> 
          <p>hello</p>
        </div>
      </div>
      <div className="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" /> 
        <div className="collapse-title text-xl font-medium">
          Click to open this one and close others
        </div>
        <div className="collapse-content"> 
          <p>hello</p>
        </div>
      </div>
    </div>
  )
}
