const apiUrl = 'http://localhost:3000/api/blog/';

async function handleAPICalls(url, method, body) {
    try {
        
        console.log("URL: " + apiUrl + url);
      
      const response = await fetch(apiUrl + url, {
        method: method,
        headers: {
          'Content-Type': 'application/json'
        },
        body: body ? JSON.stringify(body) : null
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      return json.data;
      
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
}

module.exports = {
    handleAPICalls
};