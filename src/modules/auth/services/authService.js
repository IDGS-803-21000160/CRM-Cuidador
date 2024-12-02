
import { API_ENDPOINT } from "../../../config/config";
export const login = async (username, password) => {
  const response = await fetch(
    `${API_ENDPOINT}crm/admin/login`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario: username, contrasenia: password }),
    }
  );

  if (!response.ok) {
    throw new Error("Usuario o contraseña incorrectos");
  } else {
    const data = await response.json();
    console.log("Que hay", data);
    return data;
  }
};
