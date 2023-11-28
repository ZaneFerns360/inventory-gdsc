'use client'
import { useEffect, useState } from 'react'
import { pb } from '@utils/pocketbase'
import Link from 'next/link'
import { getPendingLoans } from './api/action'
import { useRouter } from 'next/navigation'
import action2 from './api/action2'
import { getUserDepartment } from '@app/api/userDepartment'

export default function Page() {
  const router = useRouter()
  const [currentEquipments, setCurrentEquipment] = useState([])
  const [department, setDepartment] = useState('')

  useEffect(() => {
    async function fetchData() {
      const dep = await getUserDepartment()
      setDepartment(dep)
      const loans = await getPendingLoans(dep)
      setCurrentEquipment(loans)
    }
    fetchData()
  }, [])

  pb.autoCancellation(false)

  const handleApproveLoan = async (pendingItem) => {
    // Copy the data from the pending item
    const data = {
      equipment: pendingItem.equipment,
      from: pendingItem.from,
      to: pendingItem.to,
      Loaned_from: pendingItem.Loaned_from,
      Loaned_to: pendingItem.Loaned_to,
    }

    try {
      // Create a new loan record with the copied data
      await pb.collection('loan').create(data)

      // Optionally, delete the pending item
      await pb.collection('pending').delete(pendingItem.id)

      // Re-fetch the equipment list
      action2()

      router.refresh()
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center pt-8"></div>

      <div className="flex flex-row items-center justify-center">
        <div className="py-4 pl-4">
          {' '}
          <Link
            className="flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2 text-gray-50 hover:bg-indigo-600"
            href="/dashboard/equipment/edit"
          >
            {/* Heroicons - Plus Solid */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            <span>Add Equipment</span>
          </Link>
        </div>
      </div>

      {currentEquipments.map((equip) => (
        <div key={equip.id} className="mb-2 flex flex-col rounded border-2 p-2">
          <h2 className="mb-2 text-lg font-bold">
            {equip.expand.equipment.item_name}
          </h2>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <h3 className="font-semibold">Brand:</h3>
              <p>{equip.expand.equipment.brand}</p>
            </div>

            <div>
              <h3 className="font-semibold">Quantity:</h3>
              <p>{equip.expand.equipment.quantity}</p>
            </div>

            <div>
              <h3 className="font-semibold">Department:</h3>
              <p>
                {equip.expand.equipment.expand.room.expand.department.dep_name}
                {/* Please dont ask how */}
              </p>
            </div>
            <div>
              <h3 className="font-semibold">To Room:</h3>
              <p>{equip.expand.to.name}</p>
            </div>
            <div>
              <h3 className="font-semibold">From Room:</h3>
              <p>{equip.expand.from.name}</p>
            </div>
            <div>
              <h3 className="font-semibold">Status:</h3>
              <p>{equip.expand.equipment.Status}</p>
            </div>
            <div>
              <h3 className="font-semibold">Scrapped:</h3>
              <p>{equip.expand.equipment.isScrapped ? 'Yes' : 'No'}</p>
            </div>
            <div>
              <h3 className="font-semibold">Loaned from:</h3>
              {/* Check if 'equipment.date' is a valid date before formatting */}
              <p>
                {!isNaN(Date.parse(equip.Loaned_from))
                  ? new Date(equip.Loaned_from).toISOString().split('T')[0]
                  : 'Invalid date'}
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Loaned Till:</h3>
              {/* Check if 'equipment.date' is a valid date before formatting */}
              <p>
                {!isNaN(Date.parse(equip.Loaned_to))
                  ? new Date(equip.Loaned_from).toISOString().split('T')[0]
                  : 'Invalid date'}
              </p>
            </div>
            <div>
              <button
                className="bg-072140 mt-0 rounded border border-black bg-blue-700 px-4 py-2 font-bold text-white"
                onClick={() => handleApproveLoan(equip)}
              >
                Approve
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
