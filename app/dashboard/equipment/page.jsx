'use client'
import React, { useState, useEffect } from 'react'
import { pb } from '@utils/pocketbase'

const Page = () => {
  const [equipmentList, setEquipmentList] = useState([
    {
      id: '',
      collectionId: '',
      collectionName: '',
      created: '',
      updated: '',
      item_name: '',
      brand: '',
      quantity: 0,
      department: '',
      room: 0,
      status: '',
      isScrapped: false,
      isLoaned: false,
      date: '',
    },
  ])

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const fetchEquipment = async () => {
      const filter = searchTerm ? `item_name ~ "${searchTerm}"` : ''
      const records = await pb.collection('equipment').getFullList({ filter })

      setEquipmentList(records)
    }

    fetchEquipment()
  }, [searchTerm])

  return (
    <div className="flex flex-col">
      <input
        type="text"
        placeholder="Search by item name"
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 rounded border-2 p-2"
      />
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
              <p>{equipment.room}</p>
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
          </div>
        </div>
      ))}
    </div>
  )
}

export default Page
