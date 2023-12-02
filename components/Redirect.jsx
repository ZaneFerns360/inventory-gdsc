'use client'
import { useEffect } from 'react'
import { getUserType } from '@app/api/userType'
import { useRouter } from 'next/navigation'

export default function GuardedComponent({ children }) {
  const router = useRouter()
  useEffect(() => {
    async function checkUserType() {
      const userType = await getUserType()
      if (userType === 'Principal') {
        router.push('/admin')
      }
    }

    checkUserType()
  }, [router])

  return <>{children}</>
}
