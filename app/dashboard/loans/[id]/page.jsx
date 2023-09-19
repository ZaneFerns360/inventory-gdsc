'use client'
import { useEffect, useState } from 'react'
import { pb } from '@utils/pocketbase'

export default function Page({ params }) {
  const { id } = params
  const [equipment, setEquipment] = useState(null)

  useEffect(() => {
    const fetchEquipment = async () => {
      if (id) {
        const record = await pb
          .collection('equipment')
          .getFirstListItem(`id="${id}"`)
        setEquipment(record)
      }
    }

    fetchEquipment()
  }, [id])

  if (!equipment) return <div>Loading...</div>

  return (
    <div className="mx-auto flex max-w-md flex-col rounded bg-gray-100 p-4 shadow-lg">
      <h1 className="mb-4 text-2xl font-bold">{equipment.item_name}</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="font-semibold">ID:</h3>
          <p>{equipment.id}</p>
        </div>
        <div>
          <h3 className="font-semibold">Collection ID:</h3>
          <p>{equipment.collectionId}</p>
        </div>
        <div>
          <h3 className="font-semibold">Collection Name:</h3>
          <p>{equipment.collectionName}</p>
        </div>
        {/* ...other fields... */}
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
  )
}
