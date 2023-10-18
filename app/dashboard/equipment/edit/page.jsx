'use client'
import React, { useState } from 'react'
import { pb } from '@utils/pocketbase'
import './Form.css'

const Form = () => {
  const [error, setError] = useState('')
  const [itemName, setItemName] = useState('')
  const [brand, setBrand] = useState('')
  const [inDate, setInDate] = useState('')
  const [quantity, setQuantity] = useState('')
  const [room, setRoom] = useState('')
  const [expDate, setexpDate] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const rooms = await pb
      .collection('room')
      .getFullList({ filter: `room_id = "${room}"` })

    // Check if a room with the entered room_id exists
    if (rooms.length === 0) {
      setError('Invalid room')
      return
    }

    const data = {
      item_name: itemName,
      brand: brand,
      room: rooms[0].id,
      quantity: quantity,
      isScrapped: false,
      isLoaned: false,
      date: inDate + 'T00:00:00.000Z',
      status: 'none',
      expDate: expDate + 'T00:00:00.000Z',
    }

    try {
      const record = await pb.collection('equipment').create(data)
      console.log(record)
      // Reset form values to empty strings
      setItemName('')
      setBrand('')
      setInDate('')
      setExpDate('')
      setQuantity('')
      setRoom('')
    } catch (err) {
      setError(err.message)
      console.error(err)
    }
  }

  return (
    <div className="my-5 flex justify-center">
      <form
        className="rounded border border-black bg-white p-8"
        onSubmit={handleSubmit}
      >
        <div className="flex justify-between">
          <div className="mr-4">
            <label
              className="text-072140 mb-2 block font-mono font-bold"
              htmlFor="entry1"
            >
              Item Name
            </label>
            <input
              className="mb-2 block w-full rounded border border-gray-500 px-4 py-2 font-mono text-black"
              id="entry1"
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
            />
            <label
              className="mb-2 text-072140 block font-mono font-bold"
              htmlFor="entry2"
            >
              Brand
            </label>
            <input
              className="mb-2 block w-full rounded border border-gray-500 px-4 py-2 font-mono text-black"
              id="entry2"
              type="text"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            />
            <label
              className="mb-2 text-072140 block font-mono font-bold"
              htmlFor="select"
            >
              Item-Category
            </label>
            <select className="mb-2 select select-bordered border-gray-500 w-full max-w-xs font-mono text-black" id="select">
              <option disabled selected>Item-Category?</option>
              <option>Consumable</option>
              <option>Non-Consumable</option>
            </select>
            <label
              className="mb-2 text-072140 block font-mono font-bold"
              htmlFor="expDate"
            >
              Exp-Date
            </label>
            <input
              className="mb-2 block w-full rounded border border-gray-500 px-4 py-2 font-mono text-black"
              id="expDate"
              type="date"
              value={expDate}
              onChange={(e) => setexpDate(e.target.value)}
            />
          </div>
          <div>
            <label
              className="mb-2 text-072140 block font-mono font-bold"
              htmlFor="entry4"
            >
              In-Date
            </label>
            <input
              className="mb-2 block w-full rounded border border-gray-500 px-4 py-2 font-mono text-black"
              id="entry4"
              type="date"
              value={inDate}
              onChange={(e) => setInDate(e.target.value)}
            />
            <label
              className="mb-2 text-072140  block font-mono font-bold"
              htmlFor="entry5"
            >
              Quantity
            </label>
            <input
              className="mb-2 block w-full rounded border border-gray-500 px-4 py-2 font-mono text-black"
              id="entry5"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
            <label
              className="mb-2 text-072140 block font-mono font-bold"
              htmlFor="entry6"
            >
              Room
            </label>
            <input
              className="mb-2 block w-full rounded border border-gray-500 px-4 py-2 font-mono text-black"
              id="entry6"
              type="text"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-2 flex justify-center">
          <button
            className="bg-072140 mt-4 rounded border border-black px-4 py-2 font-bold text-white hover:bg-blue-700"
            type="submit"
          >
            Submit
          </button>
        </div>
        {error && <p className="text-red-700">{error}</p>}
      </form>
    </div>
  )
}

export default Form
