import React, { useState } from "react";

const CaregiverApplications = ({ itemsUser, setSelectedUser }) => {
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

  const selectUser = (user) => {
    setUsuarioSeleccionado(user);
    setSelectedUser(user);
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/3 lg:w-1/4 p-4">
        <div className="mt-8 space-y-4">
          {itemsUser.map((user, index) => (
            <button
              key={index}
              onClick={() => selectUser(user)}
              className={`flex items-center w-full px-5 py-2 transition-colors duration-200 hover:bg-blue-50 gap-x-2 hover:bg-gray-100 focus:outline-none ${
                usuarioSeleccionado?.id_usuario === user.id_usuario
                  ? "bg-gray-200"
                  : ""
              }`}
            >
              <img
                className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                src={user.avatarImage}
                alt="Bordered avatar"
              />
              <div className="text-left rtl:text-right">
                <p className="text-sm font-medium text-gray-700 capitalize">
                  {user.name}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {user.email}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="flex-1 p-4">
        {usuarioSeleccionado ? (
          <div>
            <h2 className="text-xl font-bold">{usuarioSeleccionado.name}</h2>
            <p>{usuarioSeleccionado.email}</p>
            {/* Aquí puedes agregar más información del usuario seleccionado */}
          </div>
        ) : (
          <p>Selecciona un usuario para ver su información</p>
        )}
      </div>
    </div>
  );
};

export default CaregiverApplications;
