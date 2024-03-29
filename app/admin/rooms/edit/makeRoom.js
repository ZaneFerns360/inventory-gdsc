// Server-side function
export async function createRoom(roomData) {
    // Define the full URL
    const url = `http://127.0.0.1:8090/api/collections/room/records`;
  
    // Define the request options
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(roomData),
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
  