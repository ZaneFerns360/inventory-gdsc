'use server'
import { revalidatePath } from 'next/cache'

export async function sendCSV(formData) {
    'use server'

    // Create a new FormData instance
    const data = new FormData()
    data.append('file', formData.get('file'))

    // Send the POST request
    const response = await fetch('http://localhost:8000/upload', {
      method: 'POST',
      body: data,
    })

    // Handle the response
    if (!response.ok) {
      throw new Error('Failed to upload')
    }

    // Revalidate the path if the upload was successful
    return revalidatePath('/dashboard/equipment/edit/csv')
  }