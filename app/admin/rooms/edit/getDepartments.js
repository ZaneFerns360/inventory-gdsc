"use server"
export async function getDepartments() {


  // Define the full URL
  const url = `http://127.0.0.1:8090/api/collections/department/records?`;

  // Fetch the data
  const res = await fetch(url, { next: { revalidate: 3600 } });
  const data = await res.json();

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return data;
}
