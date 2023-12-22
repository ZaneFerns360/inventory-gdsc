'use client'
import React, { useState, useEffect, useLayoutEffect } from 'react'
import { pb } from '@utils/pocketbase'
import Link from 'next/link'
import { PiPlusCircleBold } from "react-icons/pi";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { FaExchangeAlt, FaRegTrashAlt } from "react-icons/fa";

const ITEMS_PER_PAGE = 20
const Page = () => {
  const [equipmentList, setEquipmentList] = useState([])

  const [searchTerm, setSearchTerm] = useState('')
  const [roomName, setRoomName] = useState('')
  const [department, setDepartment] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  pb.autoCancellation(false)
  useEffect(() => {
    const fetchEquipment = async () => {
      let filter = ''
      if (searchTerm) {
        filter += `item_name ~ "${searchTerm}"`
      }
      if (roomName) {
        filter += filter
          ? ` && room.room_id ~ "${roomName}"`
          : `room.room_id ~ "${roomName}"`
      }
      if (department) {
        filter += filter
          ? ` && room.department.dep_name ~ "${department}"`
          : `room.department.dep_name ~ "${department}"`
      }
      try {
        const records = await pb
          .collection('equipment')
          .getFullList({ filter, expand: 'room,room.department' })
        setEquipmentList(records)
      } catch (err) {
        console.error(err)
        // Handle the error appropriately for your application
      }
    }

    fetchEquipment()
  }, [searchTerm, roomName, department])

  const numPages = Math.ceil(equipmentList.length / ITEMS_PER_PAGE)

  // Get the equipment for the current page
  const currentEquipment = equipmentList.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )
  return (
    <div className="flex flex-col bg-slate-50 py-8">
      <div className="flex items-center justify-center py-2">
        <button
          onClick={() => setCurrentPage((old) => Math.max(old - 1, 1))}
          className="mx-3 flex h-10 items-center justify-center rounded-lg border border-gray-300 bg-white px-4 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <GrLinkPrevious className='mx-2' />
          Previous
        </button>
        <button
          onClick={() => setCurrentPage((old) => Math.min(old + 1, numPages))}
          className="mx-3 flex h-10 items-center justify-center rounded-lg border border-gray-300 bg-white px-4 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          Next
          <GrLinkNext className='mx-2' />
        </button>
      </div>

      <div className="mx-4 my-2 flex flex-col items-center justify-center sm:flex-row rounded-xl border-2 bg-slate-100">
        <div className="px-4 py-2 sm:mr-4">
          <input
            type="text"
            placeholder="Search by item name"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="my-2 rounded-xl border-2 px-4 py-2"
          />
        </div>
        <div className="px-4 py-2 sm:mr-4">
          <input
            type="text"
            placeholder="Search by room number"
            onChange={(e) => setRoomName(e.target.value)}
            className="my-2 rounded-xl border-2 px-4 py-2"
          />
        </div>
        <div className="px-4 py-2 sm:mr-4">
          <input
            type="text"
            placeholder="Search by Department"
            onChange={(e) => setDepartment(e.target.value)}
            className="my-2 rounded-xl border-2 px-4 py-2"
          />
        </div>
        <div className="px-4 py-2">
          <Link
            className="flex items-center gap-2 rounded-xl bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
            href="/dashboard/equipment/edit"
          >
            {/* Heroicons - Plus Solid */}
            <PiPlusCircleBold className='h-5 w-5 text-white' />
            <span>Add Equipment</span>
          </Link>
        </div>
      </div>

      {currentEquipment.map((equipment) => (
        <div
          key={equipment.id}
          className="mx-4 my-2 sm:flex flex-col rounded-xl border-2 p-4"
        >
          <h2 className="mb-2 text-lg font-bold">{equipment.item_name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            <div>
              <p className="font-semibold">Brand: {equipment.brand}</p>
            </div>
            <div>
              <p className="font-semibold">Quantity: {equipment.quantity}</p>
            </div>
            <div>
              <p className="font-semibold">
                Department: {equipment.expand.room.expand.department.dep_name}
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Room: {equipment.expand.room.room_id}
              </p>
            </div>
            <div>
              <p className="font-semibold">Status: {equipment.Status}</p>
            </div>
            <div>
              <p className="font-semibold">
                Scrapped: {equipment.isScrapped ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <p className="font-semibold">
                Loaned: {equipment.isLoaned ? 'Yes' : 'No'}
              </p>
            </div>
            <div>
              <p className="font-semibold">
                In Date:{' '}
                {!isNaN(Date.parse(equipment.date))
                  ? new Date(equipment.date).toISOString().split('T')[0]
                  : 'Invalid date'}
              </p>
            </div>
            <div className="flex items-center">
              <button className="flex bg-072140 rounded border border-black bg-blue-700 px-4 py-1 font-bold text-white items-center hover:bg-blue-500">
                <FaExchangeAlt className="mx-2" />
                <Link href={`/dashboard/loans/pending/${equipment.id}`}>
                  Loan
                </Link>
              </button>
              <button className="flex bg-072140 rounded border border-black bg-red-600 px-4 py-1 font-bold text-white items-center hover:bg-red-700 ml-4">
                <FaRegTrashAlt className="mx-2" />
                Scrap
              </button>
            </div>
          </div>
        </div>
      ))}      
    </div>
  )
}

export default Page
