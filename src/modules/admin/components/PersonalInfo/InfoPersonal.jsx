import { useEffect, useState } from "react";
import { getInfoPersonalById } from "../../services/cuidadores";

const InfoPersonal = ({ user }) => {
  const [spinnerState, setSpinnerState] = useState(false);
  const [persona, setPersona] = useState();
  const [domicilio, setDomicilio] = useState();

  const fetchData = async () => {
    setSpinnerState(true);
    try {
      const data = await getInfoPersonalById(user.usuario.id_usuario);
      if (data) {
        setPersona(data); // Actualiza persona
      }
    } catch (error) {
      console.error("Error fetching personal info:", error);
    } finally {
      console.log("Yo soy persona", persona);

      setSpinnerState(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [user]);

  return (
    <div>
      {spinnerState ? (
        <div className="spinner">Cargando...</div>
      ) : (
        <div className="grid grid-cols-1 gap-4 mb-4">
          <form>
            <div className="flex p-2">
              <p className="subtitle text-2xl text-gray-400 font-semibold dark:text-gray-500">
                Información Personal
              </p>
            </div>
            <div
              className="flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
              role="alert"
            >
              <svg
                className="flex-shrink-0 inline w-4 h-4 me-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <div>
                <span className="font-medium">Importante!</span> Verifica que la
                informacion proporcionada coincida con los datos de los
                documentos proporcionados, tales como la identificacion oficial.
              </div>
            </div>
            <hr />
            <br />
            <section>
              {[
                {
                  label: "Nombre",
                  value: persona?.nombre,
                  id: "first_name",
                },
                {
                  label: "Apellido Paterno",
                  value: persona?.apellidoPaterno,
                  id: "last_name",
                },
                {
                  label: "Apellido Materno",
                  value: persona?.apellidoMaterno,
                  id: "apMaterno",
                },
                {
                  label: "Correo Electrónico",
                  value: persona?.correoElectronico,
                  id: "email",
                },
                {
                  label: "Fecha de Nacimiento",
                  value: persona?.fechaNacimiento,
                  id: "fechaNac",
                  type: "date",
                },
              ].map(({ label, value, id, type = "text" }) => (
                <div key={id} className="grid gap-6 mb-6 md:grid-cols-1">
                  <div className="flex">
                    <div className="w-40">
                      <label
                        htmlFor={id}
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        {label}
                      </label>
                    </div>
                    <div className="w-full">
                      <input
                        type={type}
                        id={id}
                        value={value}
                        disabled
                        className="inputColor bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block w-full p-2.5 dark:border-gray-200 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </section>
            <hr />
            <br />
            <section>
              <div className="flex p-2 mb-4">
                <p className="subtitle text-2xl text-gray-400 font-semibold dark:text-gray-500">
                  Información Residencial
                </p>
              </div>
              <hr />
              <br />
              {[
                { label: "Calle", value: domicilio?.calle, id: "calle" },
                { label: "Colonia", value: domicilio?.colonia, id: "colonia" },
                {
                  label: "Número Exterior",
                  value: domicilio?.numeroExterior,
                  id: "numeroExterior",
                },
                {
                  label: "Número Interior",
                  value: domicilio?.numeroInterior,
                  id: "numeroInterior",
                },
                { label: "Ciudad", value: domicilio?.ciudad, id: "ciudad" },
                { label: "Estado", value: domicilio?.estado, id: "estado" },
                { label: "País", value: domicilio?.pais, id: "pais" },
                {
                  label: "Referencias",
                  value: domicilio?.referencias,
                  id: "referencias",
                },
              ].map(({ label, value, id }) => (
                <div key={id} className="grid gap-6 mb-6 md:grid-cols-1">
                  <div className="flex">
                    <div className="w-40">
                      <label
                        htmlFor={id}
                        className="block mb-2 text-sm font-medium text-gray-900"
                      >
                        {label}
                      </label>
                    </div>
                    <div className="w-full">
                      <input
                        type="text"
                        id={id}
                        value={value}
                        disabled
                        className="inputColor bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block w-full p-2.5 dark:border-gray-200 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </form>
        </div>
      )}
    </div>
  );
};

export default InfoPersonal;
