import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TableContratos from "./TableContratos";
import Comentarios from "./Comentarios";

const ProfileActive = ({ user }) => {
  const [showFirstDiv, setShowFirstDiv] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const navigateFinances = () => {
    setSelectedTab("finances");
    navigate("financesServices");
    {
      renderTabContent();
    }
  };

  const navigateComentarios = () => {
    setSelectedTab("comentarios");
    navigate("commentarios");
    {
      renderTabContent();
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderTabContent = () => {
    switch (selectedTab) {
      case "finances":
        return <TableContratos user={user} />;

      case "comentarios":
        return <Comentarios user={user} />;

      default:
        return <div>Selecciona una opción</div>;
    }
  };

  return (
    <div className="rounded-lg border-solid border-inherit border-2 ">
      {showFirstDiv ? (
        <div
          role="status"
          className="w-full h-screen p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
        >
          <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
        </div>
      ) : (
        <div className=" p-4   rounded-lg  border-solid border-inherit border-2">
          <div className="profiles p-4   rounded-lg border-solid border-inherit border-2">
            <div className="w-full flex grid place-items-center">
              <section className="imgbanner w-full h-48 grid place-items-center rounded-lg">
                <div className="fotoPerfil mt-20 grid place-items-center">
                  <img
                    className="imgProfile rounded-full"
                    alt="Profile"
                    src={user.persona.avatarImage}
                  />
                </div>
                <div className="flex w-full justify-center">
                  <p className="mt-5 font-sans text-xl font-bold">
                    {user.persona.nombre}
                  </p>
                </div>
                <p className="font-sans text-base font-medium text-slate-400">
                  @{user.usuario.name}
                </p>
              </section>
            </div>
            <div className="menuLarge hidden md:block">
              <div className="w-full mt-32">
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                  <li className="me-2">
                    <button
                      onClick={navigateFinances}
                      className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
                    >
                      Info Finanzas
                    </button>
                  </li>
                  <li className="me-2">
                    <button
                      className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                      onClick={navigateComentarios}
                    >
                      Reseñas
                    </button>
                  </li>
                  <li className="me-2">
                    <button className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">
                      Documentos
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="menuMovil ">
              <div className="block md:hidden mt-32">
                <div
                  className="w-full inline-flex rounded-md shadow-sm"
                  role="group"
                >
                  <button
                    onClick={navigateFinances}
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                  >
                    <svg
                      className="w-3 h-3 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    Finanzas
                  </button>
                  <button
                    onClick={navigateComentarios}
                    type="button"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
                  >
                    <svg
                      className="w-3 h-3 me-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
                      />
                    </svg>
                    Comentarios
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className=" p-4 
"
          >
            <div className="border-solid border-inherit  rounded-lg">
              {renderTabContent()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileActive;
