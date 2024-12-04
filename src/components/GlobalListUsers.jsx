import React, { useState } from "react";

const GlobalListUsers = ({
  itemsUser,
  setSelectedComponent,
  setSelectedUser,
  title,
}) => {
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [isListVisible, setIsListVisible] = useState(false);

  const selectUser = (routerLink, userss) => {
    setUsuarioSeleccionado(userss);
    setSelectedUser(userss);
    setSelectedComponent("Profile");
  };

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <div>
      <button
        onClick={toggleListVisibility}
        className="fixed top-18 left-4 mt-8 z-50 p-2 bg-blue-500 text-white rounded-md sm:hidden shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300 ease-in-out transform hover:scale-105"
      >
        {isListVisible ? (
          <>
            <svg
              className="w-5 h-5 inline-block mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
            Cerrar Lista
          </>
        ) : (
          <>
            <svg
              className="w-5 h-5 inline-block mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
            Abrir Lista
          </>
        )}
      </button>
      <div
        className={`fixed top-0 left-0 z-40 w-64 h-screen sm:ml-64 pt-20 transition-transform bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${
          isListVisible ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        <div className="flex">
          <h2 className="px-5 text-lg font-medium text-gray-800">
            {title || "Solicitudes"}
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
                  usuarioSeleccionado?.usuario.idUsuario ===
                  userss.usuario.idUsuario
                    ? "bg-withe"
                    : ""
                }`}
              >
                <div
                  className={`${
                    usuarioSeleccionado === userss ? "dark:bg-gray-200" : ""
                  }`}
                >
                  <img
                    className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                    src={userss.persona.avatarImage}
                    alt="Bordered avatar"
                  />
                </div>
                <div className="text-left rtl:text-right">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">
                    {userss.usuario.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {userss.persona.correoElectronico}
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
