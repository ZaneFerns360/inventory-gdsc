'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState, useLayoutEffect } from 'react'
import { pb } from '@utils/pocketbase'
import Cards from '@components/Cards'
import Header from '@components/Header'
import Navbar from '@components/NavBar'

const Page = () => {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [ofType, setOfType] = useState('')

  useLayoutEffect(() => {
    const fetchUserData = async () => {
      if (!pb.authStore.isValid) {
        router.push('/')
      } else {
        try {
          const user = await pb
            .collection('users')
            .getOne(pb.authStore.model.id)
          setUsername(user.username)
          setOfType(user.ofType)
        } catch (err) {
          if (err.isAbort) {
            // Ignore the error if it is an auto-cancellation error
          } else {
            // Handle other errors
            console.error(err)
          }
        }
      }
    }
    fetchUserData()
  }, [router])

  return (
    <div>
      {/*
        <p className="pt-64">Is Valid: {pb.authStore.isValid ? 'Yes' : 'No'}</p>
        <p>Token: {pb.authStore.token}</p>
        <p>User ID: {pb.authStore.model.id}</p>
        <p>Username: {username}</p>
      <p>Of Type: {ofType}</p>
        */}
              <Cards />

    </div>
  )
}

export default Page
