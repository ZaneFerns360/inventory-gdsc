import { sendCSV } from './api/sendCSV'

const page = () => {
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
          Filetype- .xlsx (MAX. 10MB)
        </p>
        <button type="submit">Upload</button>
      </form>
    </div>
  )
}

export default page
