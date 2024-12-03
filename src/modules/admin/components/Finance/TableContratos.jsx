import React, { useEffect, useState } from "react";
import { getContratoByUserId } from "../../services/financesCuidador";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const TableContratos = ({ user }) => {
  const [contratos, setContratos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchContratos = async () => {
      setIsLoading(true);
      try {
        const contratos = await getContratoByUserId(user.usuario.id_usuario);
        if (contratos && contratos.status !== 500) {
          setContratos(contratos);
        } else {
          console.log("No hay contratos");
        }
      } catch (error) {
        console.error("Error fetching contratos:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchContratos();
  }, [user]);

  const generatePDF = (contract) => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Detalles del Contrato", 10, 10);
    doc.setFontSize(12);
    doc.text(`Contrato ID: ${contract.idContrato}`, 10, 20);
    doc.text(`Importe: ${contract.importeCuidado}`, 10, 30);
    doc.text(
      `Fecha de Servicio: ${new Date(
        contract.horarioInicio
      ).toLocaleDateString()}`,
      10,
      40
    );
    doc.text(
      `Horario: ${new Date(
        contract.horarioInicio
      ).toLocaleTimeString()} - ${new Date(
        contract.horarioFin
      ).toLocaleTimeString()}`,
      10,
      50
    );
    doc.text(`Estatus: ${contract.estatus?.nombre}`, 10, 60);
    doc.save(`contrato_${contract.idContrato}.pdf`);
  };

  const totalImporte = contratos.reduce(
    (total, contract) => total + contract.importeCuidado,
    0
  );

  return (
    <div>
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600"
            role="status"
          >
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        <div>
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
              <span className="font-medium">Información de servicios:</span>{" "}
              para administrar los servicios de cuidado necesitas realizarlo
              desde la aplicación móvil, la información mostrada es solo de
              consulta.
            </div>
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table
              id="tableContratos"
              className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400"
            >
              <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3 rounded-s-lg">
                    Num. Servicio
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Importe
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Fecha Servicio
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Horario
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Estatus
                  </th>
                  <th scope="col" className="px-6 py-3 rounded-e-lg">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                {contratos.length > 0 ? (
                  contratos.map((contract) => (
                    <tr
                      key={contract.idContrato}
                      className="bg-white dark:bg-gray-800"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {contract.idContrato}
                      </th>
                      <td className="px-6 py-4">{contract.importeCuidado}</td>
                      <td className="px-6 py-4">
                        {new Date(contract.horarioInicio).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        {new Date(contract.horarioInicio).toLocaleTimeString()}{" "}
                        - {new Date(contract.horarioFin).toLocaleTimeString()}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getStatusClass(
                            contract.estatus?.nombre
                          )}`}
                        >
                          {contract.estatus?.nombre}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => generatePDF(contract)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Generar PDF
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-6 py-4 text-center text-yellow-800 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
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
                        <span className="font-medium">Importante</span> Por el
                        momento no tienes servicios de cuidado registrados.
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="5" className="px-6 py-4 text-right font-bold">
                    Total Importe:
                  </td>
                  <td className="px-6 py-4 font-bold">{totalImporte}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

const getStatusClass = (status) => {
  switch (status) {
    case "CONCLUIDA":
      return "bg-green-100 text-green-800";
    case "RECHAZADA":
      return "bg-red-100 text-red-800";
    case "EN CURSO":
      return "bg-yellow-100 text-yellow-800";
    case "ACEPTADA":
      return "bg-blue-100 text-blue-800";
    case "ESPERA":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default TableContratos;
