'use server'

import { revalidatePath } from 'next/cache'

export async function returnLoan(id) {
  
    // Send the DELETE request
    const response = await fetch(`http://127.0.0.1:8090/api/collections/loan/records/${id}`, {
      method: 'DELETE',
    })
  
    // Handle the response
    if (!response.ok) {
      throw new Error('Failed to delete')
    }
  
    // Revalidate the path if the deletion was successful
    return revalidatePath('/dashboard/equipment/edit/csv')
  }
  