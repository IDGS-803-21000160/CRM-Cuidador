// Simulación de autenticación
export const login = (username, password) => {
  // Implementar lógica de autenticación
  if (username === "admin" && password === "password") {
    localStorage.setItem("token", "sample-token");
    return true;
  }
  return false;
};

export const logout = () => {
  localStorage.removeItem("token");
};
