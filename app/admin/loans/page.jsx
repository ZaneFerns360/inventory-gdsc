'use server'
import React from 'react'
import { pb } from '@utils/pocketbase'
import Link from 'next/link'
import { cookies } from 'next/headers' // Import cookies from next/headers
import { getUserDepartment } from '@app/api/userDepartment'
import { getUserType } from '@app/api/userType'

const ITEMS_PER_PAGE = 20

async function getLoans(dep) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/loan/records?sort=created&expand=from,to,equipment,equipment.room,equipment.room.department&filter=(equipment.room.department.dep_name='${dep}')`,
    { cache: 'no-store' }
  )
  const data = await res.json()

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return data.items
}

export default async function Page({ currentPage }) {
  const nextCookies = cookies()

  const pb_auth = nextCookies.get('pb_auth')

  const pb_auth_value = JSON.parse(pb_auth.value)
  const model_id = pb_auth_value.model.id

  const dep = await getUserDepartment()
  const equipmentList = await getLoans(dep)
  const type = await getUserType()
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-center pt-8">
        {/* <p>User ID: {pb_auth.value}</p> */}
        <p>User ID: {model_id}</p>
        <p>User Department: {dep}</p>
        <p>User Type: {type}</p>

        {/* <button
          onClick={() => setCurrentPage((old) => Math.max(old - 1, 1))}
          className="mr-3 flex h-10 items-center justify-center rounded-lg border border-gray-300 bg-white px-4 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <svg
            className="mr-2 h-3.5 w-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 5H1m0 0 4 4M1 5l4-4"
            />
          </svg>
          Previous
        </button> */}
        {/* <button
          onClick={() => setCurrentPage((old) => Math.min(old + 1, numPages))}
          className="flex h-10 items-center justify-center rounded-lg border border-gray-300 bg-white px-4 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
          <svg
            className="ml-2 h-3.5 w-3.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </button> */}
      </div>

      <div className="flex flex-row items-center justify-center">
        {/* <div className="pr-8 pt-4">
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
        <div className="pl-4 pt-4">
          <input
            type="text"
            placeholder="Search by Department"
            onChange={(e) => setDepartment(e.target.value)}
            className="mb-4 rounded border-2 p-2"
          />
        </div> */}
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

      {equipmentList.map((equip) => (
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
              <Link
                href={`/dashboard/loans/${equip.id}`}
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
