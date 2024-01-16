'use client'
import React, { useState, useLayoutEffect } from 'react'
import { createDepartment } from '../api/makeDepartment'

const RoomForm = () => {
  const [name, setName] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Create the room data object
    const roomData = {
      name: name,
    }

    // Submit the room data
    try {
      const newRoom = await createDepartment(roomData)
      console.log('Department created:', newRoom)
      setName('')
    } catch (err) {
      console.error('Failed to create Department:', err)
    }
  }

  if (isLoading) {
    return <div>Loading...</div>
  } else
    return (
      <div className="flex-col items-center justify-center justify-items-center bg-slate-100 py-8">
        <div className="my-5 flex justify-center">
          <form
            className="rounded border border-black bg-white p-8"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-between">
              <div className="mr-4">
                <label
                  className="text-072140 mb-2 block font-mono font-bold"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="mb-2 block w-full rounded border border-gray-500 px-4 py-2 font-mono text-black"
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    )
}

export default RoomForm
