'use client'

import React from 'react'
import { getRooms } from './api/getRooms'

export default function Page() {
  const [rooms, setRooms] = React.useState([])

  React.useEffect(() => {
    const fetchRooms = async () => {
      const fetchedRooms = await getRooms()
      setRooms(fetchedRooms)
    }

    fetchRooms()
  }, [])

  return (
    <div className="flex flex-col items-center">
      {rooms.map((room) => (
        <details
          key={room.id}
          className="my-2 min-w-[50%] max-w-sm rounded bg-blue-700 p-4 text-center"
        >
          <summary className="cursor-pointer text-2xl font-bold text-white">
            {room.room_id}
          </summary>
          <div className="mt-2 text-white">
            <p>
              <strong>Name:</strong> {room.name}
            </p>
            <p>
              <strong>Department:</strong> {room.expand.department.dep_name}
            </p>
          </div>
        </details>
      ))}
    </div>
  )
}
