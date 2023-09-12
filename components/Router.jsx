'use client'
import { useLayoutEffect } from 'react'
import { useRouter } from 'next/navigation'
import { pb } from '@utils/pocketbase'

export default function Router({ children }) {
  const router = useRouter()

  useLayoutEffect(() => {
    if (pb.authStore.isValid) router.push('/dashboard')
  }, [router])

  return <>{children}</>
}
