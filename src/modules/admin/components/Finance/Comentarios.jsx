import { useEffect, useState } from "react";
import { getComentariosByPersonaId } from "../../services/financesCuidador";

const Comentarios = ({ user }) => {
  const [comentarios, setComentarios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("User", user);

    const fetchComentarios = async () => {
      setIsLoading(true);
      try {
        const comentarios = await getComentariosByPersonaId(
          user.usuario.id_usuario
        );
        if (comentarios && comentarios.status !== 500) {
          setComentarios(comentarios);
          console.log("Comentarios", comentarios);
        } else {
          console.log("No hay comentarios");
        }
      } catch (error) {
        console.error("Error fetching comentarios:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchComentarios();
  }, [user]);

  const renderStars = (calificacion) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < calificacion) {
        stars.push(
          <span key={i} className="text-yellow-500">
            &#9733;
          </span>
        ); // Estrella llena
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            &#9733;
          </span>
        ); // Estrella vacía
      }
    }
    return stars;
  };

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
          {comentarios.length > 0 ? (
            <div className="space-y-4">
              {comentarios.map((comentario) => (
                <div
                  key={comentario.idComentarios}
                  className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800"
                >
                  <div className="flex items-center mb-2">
                    {renderStars(comentario.calificacion)}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">
                    {comentario.comentario}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(comentario.fechaRegistro).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 dark:text-gray-400">
              No hay comentarios
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Comentarios;
