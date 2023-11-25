"use server"
import { pb } from '@utils/pocketbase'
import Link from 'next/link'
import { cookies } from 'next/headers'
import { getUserDepartment } from '../../page'
 
async function getLoans(dep) {
    const res = await fetch(
      `http://127.0.0.1:8090/api/collections/pending/records?sort=created&expand=from,to,equipment,equipment.room,equipment.room.department&filter=(to.department.dep_name='${dep}')`,
      { next: { revalidate: 3000 } }
    )
    const data = await res.json()
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return data.items
  }