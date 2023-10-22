'use client'
import { useState, useLayoutEffect } from 'react'
import { useRouter } from 'next/navigation'
import { pb } from '@utils/pocketbase'
import Image from 'next/image'

const Login = () => {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  useLayoutEffect(() => {
    if (pb.authStore.isValid) router.push('/dashboard')
  }, [router])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const authData = await pb
        .collection('users')
        .authWithPassword(username, password)
      if (authData && pb.authStore.isValid) {
        pb.authStore.exportToCookie()
        router.push('/dashboard')
      } else {
        setError('Invalid username or password')
      }
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <section className="flex-center min-w-max flex-col px-2 lg:w-[400px]">
      <h1 className="head_text text-left"></h1>
      {error && <p className="text-red-500">{error}</p>}
      <form
        onSubmit={handleSubmit}
        className="glassmorphism mt-10 flex w-full flex-col gap-4 px-3"
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
            className="form_input focus:border-2 focus:border-blue-400"
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
            className="form_input focus:border-2 focus:border-blue-400"
          />
        </label>
        <button
          type="submit"
          className="rounded-full bg-sky-950 px-5 py-1.5 text-lg text-white hover:bg-sky-600 focus:border-2 focus:border-blue-200"
        >
          Submit
        </button>
      </form>
    </section>
  )
}

export default Login
