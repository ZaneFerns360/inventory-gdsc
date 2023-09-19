'use client'
import React, { useState, useEffect } from 'react'
import { pb } from '@utils/pocketbase'
import Link from 'next/link'

const Page = () => {
  const [equipmentList, setEquipmentList] = useState([])

  const [searchTerm, setSearchTerm] = useState('')
  const [roomNumber, setRoomNumber] = useState('')
  const [roomName, setRoomName] = useState('')

  useEffect(() => {
    const fetchEquipment = async () => {
      let filter = ''
      if (searchTerm) {
        filter += `item_name ~ "${searchTerm}"`
      }
      if (roomName) {
        filter += filter
          ? ` && room.room_name ~ "${roomName}"`
          : `room.room_name ~ "${roomName}"`
      }
      const records = await pb
        .collection('equipment')
        .getFullList({ filter, expand: 'room' })

      setEquipmentList(records)
    }

    fetchEquipment()
  }, [searchTerm, roomName])

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-center">
        <div className="pr-8 pt-4">
          <input
            type="text"
            placeholder="Search by item name"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-4 rounded border-2 p-2"
          />
        </div>
        <div className="pt-4">
          <input
            type="text"
            placeholder="Search by room number"
            onChange={(e) => setRoomName(e.target.value)}
            className="mb-4 rounded border-2 p-2"
          />
        </div>
      </div>

      {equipmentList.map((equipment) => (
        <div
          key={equipment.id}
          className="mb-2 flex flex-col rounded border-2 p-2"
        >
          <h2 className="mb-2 text-lg font-bold">{equipment.item_name}</h2>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <h3 className="font-semibold">Brand:</h3>
              <p>{equipment.brand}</p>
            </div>
            <div>
              <h3 className="font-semibold">Quantity:</h3>
              <p>{equipment.quantity}</p>
            </div>
            <div>
              <h3 className="font-semibold">Department:</h3>
              <p>{equipment.department}</p>
            </div>
            <div>
              <h3 className="font-semibold">Room:</h3>
              <p>{equipment.expand.room.room_name}</p>
            </div>
            <div>
              <h3 className="font-semibold">Status:</h3>
              <p>{equipment.status}</p>
            </div>
            <div>
              <h3 className="font-semibold">Scrapped:</h3>
              <p>{equipment.isScrapped ? 'Yes' : 'No'}</p>
            </div>
            <div>
              <h3 className="font-semibold">Loaned:</h3>
              <p>{equipment.isLoaned ? 'Yes' : 'No'}</p>
            </div>
            <div>
              <h3 className="font-semibold">In Date:</h3>
              {/* Check if 'equipment.date' is a valid date before formatting */}
              <p>
                {!isNaN(Date.parse(equipment.date))
                  ? new Date(equipment.date).toISOString().split('T')[0]
                  : 'Invalid date'}
              </p>
            </div>
            <div>
              <Link
                href={`/dashboard/${equipment.id}`}
                className="bg-072140 mt-4 rounded border border-black bg-blue-700 px-4 py-2 font-bold text-white"
              >
                Loan
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Page
