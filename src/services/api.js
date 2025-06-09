const API_BASE_URL = '/api'; // Using the proxy configuration

const defaultHeaders = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const fetchPets = async () => {
  try {
    console.log('Fetching pets from:', `${API_BASE_URL}/pets`);
    const response = await fetch(`${API_BASE_URL}/pets`, {
      method: 'GET',
      headers: defaultHeaders,
    });
    
    const data = await handleResponse(response);
    console.log('Fetched pets:', data);
    return data;
  } catch (error) {
    console.error('Error in fetchPets:', error);
    throw error;
  }
};

export const addPet = async (petData) => {
  try {
    console.log('Adding pet:', petData);
    const response = await fetch(`${API_BASE_URL}/pets`, {
      method: 'POST',
      headers: defaultHeaders,
      body: JSON.stringify(petData),
    });
    
    const data = await handleResponse(response);
    console.log('Add pet response:', data);
    return data;
  } catch (error) {
    console.error('Error in addPet:', error);
    throw error;
  }
}; 