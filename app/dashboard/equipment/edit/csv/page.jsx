import { revalidatePath } from 'next/cache'

const page = () => {
  async function sendCSV(formData) {
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
    return revalidatePath('/')
  }

  return (
    <div className="flex-col items-center justify-center justify-items-center">
      <form action={sendCSV}>
        <label
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
          htmlFor="file_input"
        >
          Upload file
        </label>
        <input
          className="block w-1/3 cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-400 dark:placeholder-gray-400"
          aria-describedby="file_input_help"
          id="file_input"
          type="file"
          name="file"
        />
        <p
          className="mt-1 text-sm text-gray-500 dark:text-gray-300"
          id="file_input_help"
        >
          SVG, PNG, JPG or GIF (MAX. 800x400px).
        </p>
        <button type="submit">Upload</button>
      </form>
    </div>
  )
}

export default page
