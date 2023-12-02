'use server'
 
import { revalidateTag } from 'next/cache'
 
export default async function action5() {
  revalidateTag('own-pending')
}