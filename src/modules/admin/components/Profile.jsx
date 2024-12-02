import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Profile.css";
import InfoPersonal from "./PersonalInfo/InfoPersonal";
import InfoMedica from "./PersonalInfo/InfoMedica";

const Profile = ({ user }) => {
  const [showFirstDiv, setShowFirstDiv] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const navigateInfoPersonal = () => {
    setSelectedTab("InfoPersonal");
    navigate("personalInfo");
    {
      renderTabContent();
    }
  };

  const navigateInfoMedica = () => {
    setSelectedTab("InfoMedica");
    navigate("medicalInfo");
    {
      renderTabContent();
    }
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  if (!user) {
    return <div>Selecciona un usuario para ver su perfil</div>;
  }

  const renderTabContent = () => {
    switch (selectedTab) {
      case "InfoPersonal":
        return <InfoPersonal user={user} />;
      case "InfoMedica":
        return <InfoMedica user={user} />;

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
                    src="/public/user-5.jpg"
                  />
                </div>
                <div className="flex w-full justify-center">
                  <hr
                    className="border-cyan-300 mt-5 border-2 mr-10"
                    style={{ width: "20%" }}
                  />
                  <p className="mt-5 font-sans text-xl font-bold">
                    {user.persona.name}
                  </p>
                  <hr
                    className="border-cyan-300 mt-5 border-2 ml-10"
                    style={{ width: "20%" }}
                  />
                </div>
                <p className="font-sans text-base font-medium text-slate-400"></p>
              </section>
            </div>
            <div className="menuLarge hidden md:block">
              <div className="w-full mt-32">
                <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                  <li className="me-2">
                    <button
                      onClick={navigateInfoPersonal}
                      className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
                    >
                      Información personal
                    </button>
                  </li>
                  <li className="me-2">
                    <button
                      onClick={navigateInfoMedica}
                      className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                    >
                      Información Médica
                    </button>
                  </li>
                  <li className="me-2">
                    <Link
                      to="/familiar/profile/documentos"
                      className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                    >
                      Documentos
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="menuMovil mt-32">
              <div className="block md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover"
                  data-dropdown-trigger="hover"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  type="button"
                >
                  Dropdown hover
                  <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>
                {isMobileMenuOpen && (
                  <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                      <li>
                        <button
                          onClick={navigateInfoPersonal}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Información personal
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={navigateInfoMedica}
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Información Médica
                        </button>
                      </li>
                      <li>
                        <Link
                          to="/familiar/profile/documentos"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Documentos
                        </Link>
                      </li>
                      <li>
                        <span className="block px-4 py-2 text-gray-400 cursor-not-allowed dark:text-gray-500">
                          Disabled
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div
            className=" p-4 
"
          >
            <div className="p-4 border-solid border-inherit border-2 rounded-lg">
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
