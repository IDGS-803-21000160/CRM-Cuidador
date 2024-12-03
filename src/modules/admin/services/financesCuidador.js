export const getUsersActives = async () => {
  try {
    const response = await fetch(
      "https://cuidadorapi.azurewebsites.net/api/CuidadorCRM/getPendingUsers/1/0/10"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching pending users:", error);
    throw error;
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
        idPersona: persona.idPersona,
        nombre: persona.nombre,
        apellidoPaterno: persona.apellidoPaterno,
        apellidoMaterno: persona.apellidoMaterno,
        correoElectronico: persona.correoElectronico,
        avatarImage: persona.avatarImage,
      },
    })),
  }));
};

export const getContratoByUserId = async (idUsuario) => {
  try {
    const response = await fetch(
      `https://cuidadorapi.azurewebsites.net/api/ContratoItem/listarContrato/${idUsuario}/1`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching contrato by user ID:", error);
    throw error;
  }
};

export const getComentariosByPersonaId = async (idPersona) => {
  try {
    const response = await fetch(
      `https://cuidadorapi.azurewebsites.net/api/Comentarios/${idPersona}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching comentarios by persona ID:", error);
    throw error;
  }
};
