'use client'
import { useEffect, useState } from 'react'
import { pb } from '@utils/pocketbase'

export default function Page({ params }) {
  const { id } = params
  const [equipment, setEquipment] = useState(null)
  const [toLoan, setToLoan] = useState('')
  const [toLoanTill, setToLoanTill] = useState('')
  const [error, setError] = useState('')

  pb.autoCancellation(false)

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

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Check if a room with the entered room_id exists
    const rooms = await pb
      .collection('room')
      .getFullList({ filter: `room_id = "${toLoan}"` })

    if (rooms.length === 0) {
      setError('Invalid room')
      return
    }

    // Update the isLoaned property of the equipment item to true
    await pb.collection('equipment').update(equipment.id, { isLoaned: true })

    // Create a new loan record
    const data = {
      equipment: equipment.id,
      from: equipment.room,
      to: rooms[0].id,
      Loaned_from: new Date().toISOString(),
      Loaned_to: toLoanTill + 'T00:00:00.000Z',
    }

    try {
      const record = await pb.collection('loan').create(data)
      // Reset form values to empty strings
      setToLoan('')
      setToLoanTill('')
    } catch (err) {
      setError(err.message)
    }
  }

  if (!equipment) return <div>Loading...</div>

  return (
    <div>
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
      <div className="mt-12 flex justify-center">
        <form
          className="rounded border border-black bg-white p-8"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-between">
            <div className="mr-4">
              <label
                className="text-072140 mb-2 block font-mono font-bold"
                htmlFor="loanEntry1"
              >
                To Loan
              </label>
              <input
                className="mb-4 block w-full rounded border border-gray-500 px-4 py-2 font-mono text-black"
                id="loanEntry1"
                type="text"
                value={toLoan}
                onChange={(e) => setToLoan(e.target.value)}
              />
            </div>
            <div>
              <label
                className="text-072140 mb-2 block font-mono font-bold"
                htmlFor="loanEntry2"
              >
                To Loan Till
              </label>
              <input
                className="block w-full rounded border border-black px-4 py-2 font-mono text-black"
                id="loanEntry2"
                type="date"
                value={toLoanTill}
                onChange={(e) => setToLoanTill(e.target.value)}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-072140 mt-4 rounded border border-black bg-blue-600 px-4 py-2 font-bold hover:bg-blue-700"
              type="submit"
            >
              Submit
            </button>
          </div>
          {error && <p className="text-red-700">{error}</p>}
        </form>
      </div>
    </div>
  )
}
