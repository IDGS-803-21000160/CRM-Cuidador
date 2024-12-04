export const getPendingUsersFam = async () => {
  try {
    const response = await fetch(
      "https://cuidadorapi.azurewebsites.net/api/CuidadorCRM/getPendingUsers/2/1/18"
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
