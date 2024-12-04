import { useEffect, useState } from "react";
import {
  getDocumentosById,
  updateDocumento,
  mapearDocumentos,
  mapearUsuario,
  updateUsuario,
} from "../../services/cuidadores";
import Swal from "sweetalert2";

const DocumentacionCuidador = ({ user }) => {
  const [documentos, setDocumentos] = useState([]);
  const [selectedDocumento, setSelectedDocumento] = useState(null);
  const [loading, setLoading] = useState(false);
  const [updatedDocumentos, setUpdatedDocumentos] = useState([]);
  const [isLiberarEnabled, setIsLiberarEnabled] = useState(false);

  const fetchDocumentos = async () => {
    console.log("fetchDocumentos desde aca", user);

    setLoading(true);
    setUpdatedDocumentos([]);
    try {
      const documentos = await getDocumentosById(user.usuario.idUsuario);
      setDocumentos(documentos);
      checkAllDocumentsApproved(documentos);
    } catch (error) {
      console.error("Error fetching documentos:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchDocumentos();
  }, [user.usuario.idUsuario]);

  const checkAllDocumentsApproved = (documentos) => {
    const allApproved = documentos.every((doc) => doc.estatusId === 3);
    setIsLiberarEnabled(allApproved);
  };

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

  const confirmarCambios = async () => {
    console.log("Documentos actualizados:", updatedDocumentos);
    const docs = mapearDocumentos(updatedDocumentos);
    try {
      const response = await updateDocumento(docs);
      if (response) {
        console.log("Documentos actualizados con éxito");
        Swal.fire({
          icon: "success",
          title: "Documentos actualizados con éxito",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {});

        fetchDocumentos();
      } else {
        console.error("Error actualizando documentos");
      }
    } catch (error) {
      console.error("Error updating documentos:", error);
    }
  };

  const liberarUsuario = async () => {
    console.log("Usuario liberado", user.usuario);

    const usuario = mapearUsuario(user.usuario);
    console.log("Usuario mapeado", usuario);

    const updateUser = await updateUsuario(usuario);

    if (updateUser) {
      console.log("Usuario actualizado con éxito");
      Swal.fire({
        icon: "success",
        title: "Usuario liberado con éxito",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {});

      fetchDocumentos();
    } else {
      console.error("Error liberando usuario");
    }
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
                  className={`border-b dark:bg-gray-800 dark:border-gray-700 ${
                    documento.estatusId === 3
                      ? "bg-green-100"
                      : documento.estatusId === 4
                      ? "bg-red-100"
                      : "bg-white "
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
                    <button onClick={() => handleAccept(documento)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                        style={{ color: "green" }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <br></br> <br></br>
                    <button onClick={() => handleReject(documento)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                        style={{ color: "red" }}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>
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
          <div className="flex justify-end p-4">
            <button
              onClick={confirmarCambios}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Confirmar Cambios
            </button>
            <div className="ml-4">
              <button
                onClick={liberarUsuario}
                className={`px-4 py-2 rounded-lg ${
                  isLiberarEnabled
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
                disabled={!isLiberarEnabled}
              >
                Liberar Usuario
              </button>
            </div>
          </div>
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
