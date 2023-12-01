'use client'
import { getCancelPendingLoans } from './api/getCancelPending'
import { deletePending } from './api/cancelPending'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import action5 from '../api/reval-own-pending'
import Link from 'next/link'

export default function Page({ params }) {
  const { id } = params
  const [loan, setLoan] = useState(null)
  const router = useRouter()

  useEffect(() => {
    async function fetchData() {
      const loanData = await getCancelPendingLoans(id)
      setLoan(loanData)
    }
    fetchData()
  }, [id])

  const handleDelete = async () => {
    await deletePending(id)
    setLoan(null) // Clear the loan data after deleting
    action5()
    router.push('/dashboard/loans/pending/own-department')
  }

  if (!loan) {
    return <div>Loading...</div>
  }

  return (
    <div>
      {loan.map((equip) => (
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
                className="bg-072140 mt-0 rounded border border-black bg-red-500 px-4 py-2 font-bold text-white"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
