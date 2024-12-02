import { API_ENDPOINT } from "../../../config/config";

export const getOrganizations = async () => {
    try {
        const response = await fetch(`${API_ENDPOINT}CuidadorCRM/getOrganizations`);
    
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

export const newOrganization = async (organization) => {
    try {
        const response = await fetch(`${API_ENDPOINT}CuidadorCRM/newOrganization`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(organization)
        });
    
        if (response.ok) {
          return true;
        } else {
          return false;
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        return false;
      }
}

export const updateOrganization = async (organization) => {
    try {
        const response = await fetch(`${API_ENDPOINT}CuidadorCRM/updateOrganization`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(organization)
        });
    
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

export const deleteOrganization = async (id) => {
    try {
        const response = await fetch(`${API_ENDPOINT}CuidadorCRM/deleteOrganization/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        if (response.ok) {
          return true;
        } else {
            return false;
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        return false;
      }
}

export const getOrganizationById = async (id) => {
    try {
        const response = await fetch(`${API_ENDPOINT}CuidadorCRM/getOrganizationById/${id}`);
    
        if (response.ok) {
          const data = await response.json();
          console.log("Data:", data);
          return true;
        } else {
          const errorText = await response.text();
          console.error("Error Response:", errorText);
          throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        return false;
      }
}
    