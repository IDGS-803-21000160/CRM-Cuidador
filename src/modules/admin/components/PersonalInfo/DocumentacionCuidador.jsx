import React, { useEffect, useState } from "react";
import { getDocumentosById } from "../../services/cuidadores";

const DocumentacionCuidador = ({ user }) => {
  const [documentos, setDocumentos] = useState([]);
  const [selectedDocumento, setSelectedDocumento] = useState(null);
  const [loading, setLoading] = useState(false);
  const [updatedDocumentos, setUpdatedDocumentos] = useState([]);

  useEffect(() => {
    const fetchDocumentos = async () => {
      setLoading(true);
      setUpdatedDocumentos([]);
      try {
        const documentos = await getDocumentosById(user.usuario.id_usuario);
        setDocumentos(documentos);
      } catch (error) {
        console.error("Error fetching documentos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDocumentos();
  }, [user.usuario.id_usuario]);

  const openModal = (documento) => {
    setSelectedDocumento(documento);
  };

  const closeModal = () => {
    setSelectedDocumento(null);
  };

  const handleAccept = (documento) => {
    const updatedDoc = { ...documento, estatusId: 3 };
    setUpdatedDocumentos((prev) => [...prev, updatedDoc]);
    setDocumentos((prev) =>
      prev.map((doc) =>
        doc.idDocumentacion === documento.idDocumentacion ? updatedDoc : doc
      )
    );
  };

  const handleReject = (documento) => {
    const updatedDoc = { ...documento, estatusId: 4 };
    setUpdatedDocumentos((prev) => [...prev, updatedDoc]);
    setDocumentos((prev) =>
      prev.map((doc) =>
        doc.idDocumentacion === documento.idDocumentacion ? updatedDoc : doc
      )
    );
  };

  const confirmarCambios = () => {
    console.log("Documentos actualizados:", updatedDocumentos);
  };

  return (
    <div>
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-blue-600"
            role="status"
          >
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Tipo de Documento
                </th>
                <th scope="col" className="px-6 py-3">
                  Nombre del Documento
                </th>
                <th scope="col" className="px-6 py-3">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>
              {documentos.map((documento) => (
                <tr
                  key={documento.idDocumentacion}
                  className={`bg-white border-b dark:bg-gray-800 dark:border-gray-700 ${
                    documento.estatusId === 3
                      ? "bg-green-100"
                      : documento.estatusId === 4
                      ? "bg-red-100"
                      : ""
                  }`}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {documento.tipoDocumento}
                  </th>
                  <td className="px-6 py-4">{documento.nombreDocumento}</td>
                  <td className="px-6 py-4 flex space-x-2">
                    <button
                      onClick={() => handleAccept(documento)}
                      className="px-4 py-2 bg-green-500 text-white rounded-lg"
                    >
                      Aceptar
                    </button>
                    <button
                      onClick={() => handleReject(documento)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg"
                    >
                      Rechazar
                    </button>
                    <button
                      onClick={() => openModal(documento)}
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Ver Documento
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedDocumento && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4">
              {selectedDocumento.nombreDocumento}
            </h2>
            <iframe
              src={selectedDocumento.urlDocumento}
              title={selectedDocumento.nombreDocumento}
              className="w-full h-96"
            ></iframe>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentacionCuidador;
