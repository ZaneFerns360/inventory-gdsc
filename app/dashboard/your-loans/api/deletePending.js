'use server'

import { revalidatePath } from 'next/cache'

export async function deletePending(id) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/loan/records?sort=created&expand=from,to,equipment,equipment.room,equipment.room.department&filter=(id='${id}')`,
    { next: { revalidate: 3000, tags: ['your-loan'] } }
  )
  const loanData = await res.json()
  console.log(loanData)
  // Check if response is successful
  if (!res.ok) {
    throw new Error('Failed to fetch loan data')
  }

  // Access the first item from loanData.items array
  const loanItem = loanData.items[0]

  // Create duplicate loan in loan_past collection
  const duplicateResponse = await fetch(
    'http://127.0.0.1:8090/api/collections/loan_past/records',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        equipment: loanItem.equipment,
        from: loanItem.from,
        to: loanItem.to,
        Loaned_from: loanItem.Loaned_from,
        Loaned_to: loanItem.Loaned_to,
      }),
    }
  )

  // Check if duplicate creation was successful
  if (!duplicateResponse.ok) {
    throw new Error('Failed to create duplicate loan')
  }

  // Update isLoaned in the equipment collection
  const equipmentResponse = await fetch(
    `http://127.0.0.1:8090/api/collections/equipment/records/${loanItem.equipment}`,
    {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isLoaned: false }),
    }
  )

  // Check if isLoaned update was successful
  if (!equipmentResponse.ok) {
    throw new Error('Failed to update isLoaned in equipment record')
  }

  // Now proceed with deleting the original loan
  const response = await fetch(
    `http://127.0.0.1:8090/api/collections/loan/records/${id}`,
    {
      method: 'DELETE',
    }
  )

  // Handle the response
  if (!response.ok) {
    throw new Error('Failed to delete')
  }

  // Revalidate the path if the deletion was successful
  return revalidatePath('/dashboard/equipment/edit/csv')
}
