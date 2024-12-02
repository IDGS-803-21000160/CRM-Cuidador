import { API_ENDPOINT } from "../../../config/config";

export const getContracts = async () => {
    try {
        const response = await fetch(`${API_ENDPOINT}CuidadorCRM/getContracts`);
    
        if (response.ok) {
          const data = await response.json();
          console.log("Data:", data);
          return data;
        } else {
          const errorText = await response.text();
          console.error("Error Response:", errorText);
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
      }
}
