import { useEffect, useState } from 'react';

// I define the base URL for the API, normally i put the base URL in .env file
const BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * Custom hook for fetching data from an API.
 * @param endpoint The endpoint to fetch data from.
 * @returns An object containing the fetched data, loading status, and error message.
 */
function useFetch<T>(endpoint: string) {
    // State to store the fetched data.
    const [data, setData] = useState<T | null>(null);
    // State to manage the loading status of the request.
    const [loading, setLoading] = useState<boolean>(true);
    // State to capture any errors that occur during the request.
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Function to handle fetching data from the API.
        const fetchData = async () => {
            try {
                // Perform the API request.
                const response = await fetch(`${BASE_URL}${endpoint}`);
                // Check if the response is not OK (status code outside 200-299).
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                // Parse the JSON response.
                const data = await response.json();
                // Update the state with the fetched data.
                setData(data);
            } catch (error: any) {
                // Capture and store the error message.
                setError(error.message);
            } finally {
                // Indicate that the loading has finished.
                setLoading(false);
            }
        };

        // Initiate data fetching when the component mounts or the endpoint changes.
        fetchData();
    }, [endpoint]);

    // Return the state values for use in components.
    return { data: data ?? ([] as T), loading, error };
}

export default useFetch;
