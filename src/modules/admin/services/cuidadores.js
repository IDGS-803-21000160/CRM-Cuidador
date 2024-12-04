export const getPendingUsers = async () => {
  try {
    const response = await fetch(
      "https://cuidadorapi.azurewebsites.net/api/CuidadorCRM/getPendingUsers/1/0/18"
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

export const getDomicilioById = async (idPersona) => {
  try {
    const response = await fetch(
      `https://cuidadorapi.azurewebsites.net/api/MyProfile/getDomicilio/${idPersona}`
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

export const getDatosMedicosById = async (idPersona) => {
  try {
    const response = await fetch(
      `https://cuidadorapi.azurewebsites.net/api/MyProfile/getDatosMedicos/${idPersona}`
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

export const getPadecimientosById = async (idPersona) => {
  try {
    const response = await fetch(
      `https://cuidadorapi.azurewebsites.net/api/MyProfile/getPadecimientos/${idPersona}`
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


export const mapUserData = (data) => {
  return data.map((user) => ({
    routerLink: "/profile", // Puedes cambiarlo según tu ruta
    users: user.personaFisica.map((persona) => ({
      usuario: {
        idUsuario: user.idUsuario,
        name: user.usuario,
        nivelUsuario: user.nivelUsuario,
        tipoUsuario: user.tipoUsuario,
        estatusUsuario: user.estatusUsuario,
        estatusId: user.estatusId,
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

export const mapearDocumentos = (documentos) => {
  return documentos.map((documento) => ({
    idDocumento: documento.idDocumentacion,
    personaId: documento.personaId,
    tipoDocumento: documento.tipoDocumento,
    nombreDocumento: documento.nombreDocumento,
    urlDocumento: documento.urlDocumento,
    fechaEmision: documento.fechaEmision,
    fechaExpiracion: documento.fechaExpiracion,
    version: documento.version,
    estatusId: documento.estatusId,
    fechaRegistro: documento.fechaRegistro,
    usuarioRegistro: documento.usuarioRegistro,
    fechaModificacion: documento.fechaModificacion,
    usuarioModifico: documento.usuarioModifico,
    certificacionesExperiencia: documento.certificacionesExperiencia,
    estatus: documento.estatus,
  }));
};
export const updateUsuario = async (usuarioData) => {
  try {
    const response = await fetch(
      `https://cuidadorapi.azurewebsites.net/api/Usuario/updateUsuario`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(usuarioData),
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

export const mapearUsuario = (usuario) => {
  return {
    id_usuario: usuario.idUsuario,
    usuarionivel_id: 6,
    tipo_usuarioid: usuario.tipoUsuario === "Cuidador" ? 1 : 2,
    estatusid: 10,
    contrasenia: "",
    usuario: usuario.name,
    usuario_registro: 0, // Este campo no está en el objeto original, así que se asigna un valor por defecto
    usuario_modifico: 0, // Este campo no está en el objeto original, así que se asigna un valor por defecto
  };
};
