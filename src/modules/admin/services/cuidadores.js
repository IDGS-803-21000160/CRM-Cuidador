export const getPendingUsers = async () => {
  try {
    const response = await fetch(
      "https://cuidadorapi.azurewebsites.net/api/CuidadorCRM/getPendingUsers/1/0"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const mapUserData = (data) => {
  return data.map((user) => ({
    routerLink: "/profile", // Puedes cambiarlo según tu ruta
    users: user.personaFisica.map((persona) => ({
      usuario: {
        id_usuario: user.idUsuario,
        name: user.usuario,
        nivelUsuario: user.nivelUsuario,
        tipoUsuario: user.tipoUsuario,
        estatusUsuario: user.estatusUsuario,
      },
      persona: {
        nombre: persona.nombre,
        apellidoPaterno: persona.apellidoPaterno,
        apellidoMaterno: persona.apellidoMaterno,
        correoElectronico: persona.correoElectronico,
        avatarImage: persona.avatarImage,
      },
    })),
  }));
};

export const getInfoPersonalById = async (idUsuario) => {
  try {
    const response = await fetch(
      `https://cuidadorapi.azurewebsites.net/api/crm/Persona/getPersona/${idUsuario}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const getDocumentosById = async (idUsuario) => {
  try {
    const response = await fetch(
      `https://cuidadorapi.azurewebsites.net/api/crm/Persona/getDocumento/${idUsuario}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
export const updateDocumento = async (documentoData) => {
  try {
    const response = await fetch(
      `https://cuidadorapi.azurewebsites.net/api/Doocumentos/updateDocumento`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(documentoData),
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};
