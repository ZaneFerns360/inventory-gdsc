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

  useEffect(() => {
    const fetchEquipment = async () => {
      const records = await pb.collection('equipment').getFullList({
        sort: 'created',
      })
      console.log(records)
      setEquipmentList(records)
    }

    fetchEquipment()
  }, [])

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
