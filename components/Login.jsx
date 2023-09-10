'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { pb } from '@utils/pocketbase'
import Image from 'next/image'

const Login = () => {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const authData = await pb
        .collection('users')
        .authWithPassword(username, password)
      if (authData && pb.authStore.isValid) {
        router.push('/dashboard')
      } else {
        setError('Invalid username or password')
      }
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <section className="flex-center max-w-full flex-col">
      <h1 className="head_text text-left"></h1>
      {error && <p className="text-red-500">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="glassmorphism mt-10 flex w-full max-w-2xl flex-col gap-7"
      >
        <div className="flex items-center justify-center">
          <Image
            src="/assets/FRCRCE.png"
            width={120}
            height={200}
            alt="Father Agnel"
          />
        </div>

        <label>
          <span className="font-satoshi text-base font-semibold text-gray-700">
            Faculty Email
          </span>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Email"
            required
            className="form_input"
          />
        </label>
        <label>
          <span className="font-satoshi text-base font-semibold text-gray-700">
            Password
          </span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="form_input"
          />
        </label>
        <button
          type="submit"
          className="rounded-full bg-sky-950 px-5 py-1.5 text-lg text-white"
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default Login
