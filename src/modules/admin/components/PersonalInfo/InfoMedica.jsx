import { useState, useEffect } from "react";
import Spinner from "../Spinner/Spinner";
import SpinnerNoShadow from "../SpinnerNoShadow/SpinnerNoShadow";
import {
  getInfoPersonalById,
  getPadecimientosById,
  getDatosMedicosById,
} from "../../services/cuidadores";

const InfoMedica = ({ user }) => {
  const [spinerState, setSpinerState] = useState(true);
  const [infoMedica, setInfoMedica] = useState();
  const [listaAlergias, setListaAlergias] = useState([]);
  const [padecimientos, setPadecimientos] = useState([]);

  const getDatosPersonales = async () => {
    try {
      const data = await getInfoPersonalById(user.usuario.idUsuario);
      if (data && data.length > 0) {
        console.log("data de persona en medica", data);
        getDatosMedicos(data[0].idPersona);
        getPadecimientos(data[0].idPersona);
      }
    } catch (error) {
      console.error("Error fetching personal info:", error);
    }
  };

  const getDatosMedicos = async (idPersona) => {
    try {
      const data = await getDatosMedicosById(idPersona);
      if (data) {
        console.log("Datos Medicos", data);
        setListaAlergias(data.alergias.split(","));
        setInfoMedica(data);
      }
    } catch (error) {
      console.error("Error fetching medical info:", error);
    }
  };

  const getPadecimientos = async (idPersona) => {
    try {
      const data = await getPadecimientosById(idPersona);
      if (data && data.length > 0) {
        console.log("Padecimientos", data);
        setPadecimientos(data);
      }
    } catch (error) {
      console.error("Error fetching padecimientos info:", error);
    } finally {
      setTimeout(() => {
        setSpinerState(false);
      }, 3000);
    }
  };

  useEffect(() => {
    getDatosPersonales();
  }, [user]);

  return (
    <div>
      {spinerState ? (
        <SpinnerNoShadow loading={spinerState} />
      ) : (
        <div className="grid grid-cols-1 gap-4 mb-4">
          <form>
            <div className="flex p-2">
              <p className="subtitle text-2xl text-gray-400 font-semibold dark:text-gray-500">
                Información Médica
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
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">Importante!</span> Si deseas
                modificar tu información Medica, por favor contacta a tu
                administrador.
              </div>
            </div>
            <hr />
            <br />
            <section>
              <div className="grid gap-6 mb-6 md:grid-cols-1">
                <div className="flex">
                  <div className="w-40">
                    <label
                      htmlFor="alergias"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Alergias
                    </label>
                  </div>
                  <div className="w-full flex">
                    {listaAlergias.map((alergia, index) => (
                      <div key={index}>
                        <span className="bg-indigo-100 text-indigo-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-100 dark:text-indigo-800">
                          {alergia}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid gap-6 mb-6 md:grid-cols-1">
                <div className="flex">
                  <div className="w-40">
                    <label
                      htmlFor="tipo_sanguineo"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Tipo Sanguíneo
                    </label>
                  </div>
                  <div className="w-full">
                    <select
                      id="tipo-sanguineo"
                      name="tipo-sanguineo"
                      value={infoMedica?.tipoSanguineo}
                      onChange={(e) =>
                        setInfoMedica({
                          ...infoMedica,
                          tipoSanguineo: e.target.value,
                        })
                      }
                      className="inputColor bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      disabled
                    >
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="grid gap-6 mb-6 md:grid-cols-1">
                <div className="flex">
                  <div className="w-40">
                    <label
                      htmlFor="nombre_medicofamiliar"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Nombre Médico Familiar
                    </label>
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      id="nombre_medicofamiliar"
                      name="nombre_medicofamiliar"
                      value={infoMedica?.nombreMedicofamiliar}
                      onChange={(e) =>
                        setInfoMedica({
                          ...infoMedica,
                          nombreMedicofamiliar: e.target.value,
                        })
                      }
                      className="inputColor bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block w-full p-2.5 dark:border-gray-200 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Nombre Médico Familiar"
                      required
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="grid gap-6 mb-6 md:grid-cols-1">
                <div className="flex">
                  <div className="w-40">
                    <label
                      htmlFor="telefono_medicofamiliar"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Teléfono Médico Familiar
                    </label>
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      id="telefono_medicofamiliar"
                      name="telefono_medicofamiliar"
                      value={infoMedica?.telefonoMedicofamiliar}
                      onChange={(e) =>
                        setInfoMedica({
                          ...infoMedica,
                          telefonoMedicofamiliar: e.target.value,
                        })
                      }
                      className="inputColor bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block w-full p-2.5 dark:border-gray-200 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Teléfono Médico Familiar"
                      required
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="grid gap-6 mb-6 md:grid-cols-1">
                <div className="flex">
                  <div className="w-40">
                    <label
                      htmlFor="observaciones"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Observaciones
                    </label>
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      id="observaciones"
                      name="observaciones"
                      value={infoMedica?.observaciones}
                      onChange={(e) =>
                        setInfoMedica({
                          ...infoMedica,
                          observaciones: e.target.value,
                        })
                      }
                      className="inputColor bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-100 block w-full p-2.5 dark:border-gray-200 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Observaciones"
                      required
                      disabled
                    />
                  </div>
                </div>
              </div>
            </section>

            <div className="flex p-2 mb-4">
              <p className="subtitle text-2xl text-gray-400 font-semibold dark:text-gray-500">
                Padecimientos
              </p>
            </div>
            <hr />
            <br />

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-sky-50 dark:bg-sky-50 dark:text-gray-700">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Nombre
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Descripción
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Padece desde:
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {padecimientos.map((padecimiento, index) => (
                    <tr key={index} className="bg-white border-b">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        {padecimiento?.nombre}
                      </th>
                      <td className="px-6 py-4">{padecimiento?.descripcion}</td>
                      <td className="px-6 py-4">{padecimiento?.padeceDesde}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <br />
          </form>
        </div>
      )}
    </div>
  );
};

export default InfoMedica;
