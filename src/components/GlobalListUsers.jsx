import React, { useState } from "react";

const GlobalListUsers = ({ itemsUser, setSelectedComponent }) => {
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [isListVisible, setIsListVisible] = useState(false);

  const selectUser = (routerLink, userss) => {
    setUsuarioSeleccionado(userss);
    setSelectedComponent("Profile");
  };

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <div>
      <button
        onClick={toggleListVisibility}
        className="fixed top-4 left-4 z-50 p-2 bg-blue-500 text-white rounded-md sm:hidden"
      >
        {isListVisible ? "Cerrar Lista" : "Abrir Lista"}
      </button>
      <div
        className={`fixed top-0 left-0 z-40 w-64 h-screen sm:ml-64 pt-20 transition-transform bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${
          isListVisible ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="flex">
          <h2 className="px-5 text-lg font-medium text-gray-800">
            Solicitudes
          </h2>
          <div className="flex pt-3">
            <span className="flex w-3 h-3 me-3 bg-sky-100 rounded-full"></span>
            <span className="flex w-3 h-3 me-3 bg-sky-200 rounded-full dark:bg-gray-700"></span>
            <span className="flex w-3 h-3 me-3 bg-sky-300 rounded-full"></span>
            <span className="flex w-3 h-3 me-3 bg-sky-400 rounded-full"></span>
          </div>
        </div>

        <div className="mt-8 space-y-4">
          {itemsUser.map((user, userIndex) =>
            user.users.map((userss, userssIndex) => (
              <button
                key={`${userIndex}-${userssIndex}`}
                onClick={() => selectUser(user.routerLink, userss)}
                className={`flex items-center w-full px-5 py-2 transition-colors duration-200 hover:bg-blue-50 gap-x-2 hover:bg-gray-100 focus:outline-none ${
                  usuarioSeleccionado?.usuario.id_usuario ===
                  userss.usuario.id_usuario
                    ? "bg-gray-200"
                    : ""
                }`}
              >
                <div
                  style={{ backgroundColor: "#6096ba" }}
                  className={`flex justify-center w-12 h-12 pt-1 rounded-full ${
                    usuarioSeleccionado === userss ? "dark:bg-gray-200" : ""
                  }`}
                >
                  <img
                    className="object-cover w-10 h-10 rounded-full"
                    src={userss.persona.avatarImage}
                    alt="User Avatar"
                  />
                </div>
                <div className="text-left rtl:text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {userss.usuario.name}
                  </p>
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default GlobalListUsers;
