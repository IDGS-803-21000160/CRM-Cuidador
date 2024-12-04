import { useState } from "react";
import bannerLogin from "../../../assets/bannerLogin.png";
import isotipo from "../../../assets/isotipo.jpg";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import Spinner from "../../admin/components/Spinner/Spinner";
import Swal from "sweetalert2";

const LoginPage = ({ onLoginSuccess }) => {
  const [usuario, setUsuario] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsLoading(true);

    try {
      const userData = await login(usuario, contrasenia);

      if (userData) {
        onLoginSuccess();
        navigate("/admin/dashboard");
      } else {
        alerError("Verifica tus credenciales");
      }
    } catch (error) {
      alerError("Verifica tus credenciales");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const alerError = (message) => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: message,
    });
  };

  return (
    <div>
      {isLoading && <Spinner />}
      <div>
        <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={isotipo} className="h-8" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Cuidador Admin
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-solid-bg"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-solid-bg"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-solid-bg"
            >
              <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Acerca de cuidador Admin
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-4xl p-6 bg-white shadow-md rounded-lg flex flex-col lg:flex-row-reverse items-center lg:items-stretch">
          <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
            <img src={bannerLogin} alt="Banner" className="w-full rounded-lg" />
          </div>
          <div className="w-full lg:w-1/2">
            <section className="flex flex-col items-center">
              <div className="w-full">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
                  Bienvenido de nuevo
                </h2>
                <p className="text-center text-gray-600 mb-4">
                  Inicie su sitio web en segundos. ¿No tienes una cuenta?
                  <a className="text-sky-600 font-semibold" href="#">
                    Inscribirse
                  </a>
                  .
                </p>
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      value={usuario}
                      onChange={(e) => setUsuario(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="name@cuidador.com"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      Contraseña
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={contrasenia}
                      onChange={(e) => setContrasenia(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                      placeholder="°°°°°°°°°°°"
                      required
                    />
                  </div>
                  <div className="flex items-center justify-center">
                    <hr className="w-1/4" />
                    <p className="px-2 text-gray-600">o</p>
                    <hr className="w-1/4" />
                  </div>
                  <div>
                    <button
                      type="button"
                      className="w-full hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                    >
                      <svg
                        className="w-6 h-5 me-2 -ms-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="48px"
                        height="48px"
                      >
                        <path
                          fill="#FFC107"
                          d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                        />
                        <path
                          fill="#FF3D00"
                          d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                        />
                        <path
                          fill="#4CAF50"
                          d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                        />
                        <path
                          fill="#1976D2"
                          d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                        />
                      </svg>
                      Inicia sesión con Google
                    </button>
                  </div>
                  <div className="mt-0">
                    <button
                      type="button"
                      className="w-full hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
                    >
                      <svg
                        className="w-6 h-5 me-2 -ms-1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        width="50px"
                        height="50px"
                      >
                        <path d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z" />
                      </svg>
                      Inicia sesión con Apple
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={handleLogin}
                      type="button"
                      className="w-full btnLogin text-white p-3 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                      Ingresar
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
