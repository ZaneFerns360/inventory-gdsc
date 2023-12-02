"use server"

 
export async function getYourLoans(id) {

    const res = await fetch(
      `http://127.0.0.1:8090/api/collections/loan/records?sort=created&expand=from,to,equipment,equipment.room,equipment.room.department&filter=(id='${id}')`,
      { next: { revalidate: 3000,tags: ['your-loan'] } }
    )
    const data = await res.json()
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return data.items
  }