'use server'
import { cookies } from 'next/headers' // Import cookies from next/headers

export async function getUserDepartment() {
    const nextCookies = cookies()
  
    const pb_auth = nextCookies.get('pb_auth')
  
    const pb_auth_value = JSON.parse(pb_auth.value)
  
    const model_id = pb_auth_value.model.id
  
    const res = await fetch(
      `http://127.0.0.1:8090/api/collections/users/records/${model_id}?sort=created&expand=department`,
      { next: {  cache: 'no-store' ,tags: ['department'] } }
    )
    const data = await res.json()
  
    if (!res.ok) {
      throw new Error('Failed to fetch user data')
    }
  
    return data.expand.department[0].dep_name
  }