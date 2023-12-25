"use server"

export async function getEquipment(page, name, room, department) {
  // Define the filter
  let filter = '';
  if (name) {
    filter += `item_name ~ "${name}"`;
  }
  if (room) {
    filter += filter ? ` && room.room_id ~ "${room}"` : `room.room_id ~ "${room}"`;
  }
  if (department) {
    filter += filter ? ` && room.department.dep_name ~ "${department}"` : `room.department.dep_name ~ "${department}"`;
  }

  // Define the full URL
  const url = `http://127.0.0.1:8090/api/collections/equipment/records?page=${page}&perPage=15&filter=${encodeURIComponent(filter)}&expand=room,room.department`;

  // Fetch the data
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return data.items;
}