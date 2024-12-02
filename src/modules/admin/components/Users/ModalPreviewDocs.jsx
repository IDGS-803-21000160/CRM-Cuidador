/* eslint-disable react/prop-types */
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
  } from "@nextui-org/react";
  
  export default function ModalPreviewDocs({
    fileUrl,
    isOpen,
    onClose,
    showButton = true, // Por defecto muestra el botón "Ver Documento"
  }) {
    // Función para decidir cómo mostrar el archivo según su tipo
    const getFilePreview = () => {
      if (!fileUrl) {
        return <p>No se proporcionó un archivo para previsualizar.</p>;
      }
  
      const fileType = fileUrl.split(".").pop().toLowerCase();
  
      if (fileType === "pdf") {
        return (
          <iframe
            src={fileUrl}
            style={{ width: "100%", height: "500px", border: "none" }}
            title="PDF Preview"
          />
        );
      }
  
      if (["jpg", "jpeg", "png", "gif", "webp"].includes(fileType)) {
        return <img src={fileUrl} alt="Preview" style={{ maxWidth: "100%" }} />;
      }
  
      if (["mp4", "webm"].includes(fileType)) {
        return (
          <video controls style={{ width: "100%" }}>
            <source src={fileUrl} type={`video/${fileType}`} />
            Tu navegador no soporta la reproducción de videos.
          </video>
        );
      }
  
      return <p>No se puede previsualizar este tipo de archivo: {fileType}</p>;
    };
  
    return (
      <>
        {/* Botón para abrir el modal (opcional) */}
        {showButton && (
          <Button color="primary" onPress={onClose}>
            Ver Documento
          </Button>
        )}
  
        {/* Modal */}
        <Modal isOpen={isOpen} onClose={onClose} size="lg">
          <ModalHeader>
            <h2>Previsualización del Documento</h2>
          </ModalHeader>
          <ModalBody>
            {/* Lógica para mostrar la vista previa del documento */}
            {getFilePreview()}
          </ModalBody>
          <ModalFooter>
            <Button variant="flat" color="secondary" onPress={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }