import {API_ENDPOINT} from "../../../config/config";

export const getUsuarios = async () => {

    try {
        const response = await fetch(`${API_ENDPOINT}CuidadorCRM/getAllUsers`);
    
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

export const getPersonById = async (id) => {
    try {
        const response = await fetch(`${API_ENDPOINT}CuidadorCRM/getPersonById/${id}`);
    
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

export const getDocumentsByPersonaId = async (id) => {
    try {
        const response = await fetch(`${API_ENDPOINT}CuidadorCRM/getDocumentsByPersonId/${id}`);
    
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

export const getDocumentsByUserId = async (id) => {
    try {
        const response = await fetch(`${API_ENDPOINT}crm/Persona/getDocumento/${id}`);
    
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

export const getDataMedicalByPersonId = async (id) => {
    try {
        const response = await fetch(`${API_ENDPOINT}CuidadorCRM/getMedicalDataByPersonId/${id}`);
    
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

export const getMedicalDataByUserId = async (id) => {
    try {
        const response = await fetch(`${API_ENDPOINT}crm/Persona/getDatoMedico/${id}`);
    
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

export const getSchedulesByUserId = async (id) => {
    try {
        const response = await fetch(`${API_ENDPOINT}HorariosCuidador/${id}`);
    
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

export const getAllUsersById = async (id, tipo) => {
    try {
        console.log("ID:", id + " Tipo:", tipo);
        const response = await fetch(`${API_ENDPOINT}CuidadorCRM/getPersonaUsuario/${id}/${tipo}`);
    
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

export const updateUser = async (user) => {
    try {
        const response = await fetch(`${API_ENDPOINT}CuidadorCRM/updateUser`, {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
    
        if (response.ok) {
          console.log("User updated successfully");
          return true;
        } else {
          console.error("Failed to update user:", response.statusText);
          return false;
        }
      } catch (error) {
        console.error("Fetch Error:", error);
        return false;
      }
}

export const changeStatusSchedule = async (id, status) => {
    try {
      const response = await fetch(`${API_ENDPOINT}HorariosCuidador/cambiarEstatusHorario/${id}/${status}`, {
        method: "PUT", // Cambia a PUT
        headers: {
          "Content-Type": "application/json", // Define el tipo de contenido
        },
        body: JSON.stringify({ status }), // Si necesitas enviar datos adicionales
      });
  
      if (response.ok) {
        console.log("Status updated successfully");
        return true;
      } else {
        console.error("Failed to update status:", response.statusText);
        return false;
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      return false;
    }
  }

export const changeStatusUser = async (id, status) => {
  try {
    const response = await fetch(`${API_ENDPOINT}CuidadorCRM/blockOrEnableUser/${id}/${status}`, {
      method: "PUT", // Cambia a PUT
      headers: {
        "Content-Type": "application/json", // Define el tipo de contenido
      },
      body: JSON.stringify({ status }), // Si necesitas enviar datos adicionales
    });

    if (response.ok) {
      console.log("Status updated successfully");
      return true;
    } else {
      console.error("Failed to update status:", response.statusText);
      return false;
    }
  } catch (error) {
    console.error("Fetch Error:", error);
    return false;
  }
};


