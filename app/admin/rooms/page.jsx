'use client'
import React, { useState, useLayoutEffect } from 'react'
import { getDepartments } from './getDepartments'

const RoomForm = () => {
  const [id, setId] = useState('')
  const [roomId, setRoomId] = useState('')
  const [name, setName] = useState('')
  const [department, setDepartment] = useState('')
  const [departmentList, setDepartmentList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useLayoutEffect(() => {
    const fetchDepartments = async () => {
      const departments = await getDepartments()
      setDepartmentList(departments.items)
      setIsLoading(false)
    }

    fetchDepartments()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Create the room data object
    const roomData = {
      id,
      room_id: roomId,
      name,
      department,
    }

    // Submit the room data
    try {
      const newRoom = await createRoom(roomData)
      console.log('Room created:', newRoom)
    } catch (err) {
      console.error('Failed to create room:', err)
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
                  htmlFor="id"
                >
                  ID
                </label>
                <input
                  className="mb-2 block w-full rounded border border-gray-500 px-4 py-2 font-mono text-black"
                  id="id"
                  type="text"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
                <label
                  className="text-072140 mb-2 block font-mono font-bold"
                  htmlFor="roomId"
                >
                  Room ID
                </label>
                <input
                  className="mb-2 block w-full rounded border border-gray-500 px-4 py-2 font-mono text-black"
                  id="roomId"
                  type="text"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                />
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
                <label
                  className="text-072140 mb-2 block font-mono font-bold"
                  htmlFor="department"
                >
                  Department
                </label>
                <select
                  className="select select-bordered mb-2 w-full max-w-xs border-gray-500 font-mono text-black"
                  id="department"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                >
                  <option disabled selected>
                    Select a department
                  </option>
                  {departmentList.map((dept) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.dep_name}
                    </option>
                  ))}
                </select>
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
