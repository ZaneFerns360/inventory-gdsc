// Server-side function
export async function createDepartment(Data) {
    // Define the full URL
    const url = `http://127.0.0.1:8090/api/collections/department/records`;
  
    // Define the request options
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Data),
    };
  
    // Send the request
    const res = await fetch(url, options);
  
    // Check the response status
    if (!res.ok) {
      throw new Error('Failed to create room');
    }
  
    // Parse the response data
    const data = await res.json();
  
    return data;
  }
  