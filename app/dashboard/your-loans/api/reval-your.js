'use server'
 
import { revalidateTag } from 'next/cache'
 
export default async function revalYourLoans() {
  revalidateTag('your-loan')
}