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
    <div>
      <input
        type="text"
        placeholder="Search by item name"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {equipmentList.map((equipment) => (
        <div key={equipment.id}>
          <h2>{equipment.item_name}</h2>
          {/* Render other equipment details here */}
        </div>
      ))}
    </div>
  )
}

export default Page
