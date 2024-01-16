"use server"

 
export async function getRooms() {

    const res = await fetch(
      `http://127.0.0.1:8090/api/collections/room/records?sort=created&expand=department`,
      { next: { revalidate: 0 ,tags: ['department'] } }
    )
    const data = await res.json()
  
    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }
  
    return data.items
  }