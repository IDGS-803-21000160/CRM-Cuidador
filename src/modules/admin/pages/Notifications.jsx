import { Button } from "@nextui-org/react";
import { useState } from "react";
import FormNotificationComponent from "../components/Notificactions/FormNotificationComponent";
import ViewNotificationComponent from "../components/Notificactions/ViewNotificationComponent";

const Notifications = () => {

    const [activateForm, setActivateForm] = useState(false);

  return <div>

    <div>
    {
        activateForm === false ? 
            <div className="ps-4 pb-12 h-full flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Listado de Notificaciones</h1>
                <Button 
                onClick={() => setActivateForm(!activateForm)}
                color="primary" 
                endContent={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6</svg>">
                        <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                    </svg>                      
                } >Crear notificación
                </Button>
            </div> 
        : 
        <div className="ps-4 pb-12 h-full flex items-center">
            {/* Título alineado a la izquierda */}
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex-grow">
                Crear una nueva notificación
            </h1>

            {/* Botones alineados a la derecha */}
            {activateForm && (
                <div className="flex gap-4">
                <Button
                    onClick={() => setActivateForm(!activateForm)}
                    color="danger"
                    endContent={
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="size-6"
                    >
                        <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                        />
                    </svg>
                    }
                >
                    Cancelar
                </Button>
                <Button
                    onClick={() => setActivateForm(!activateForm)}
                    color="success"
                    endContent={
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                        </svg>                              
                        }
                    >
                    Guardar y enviar
                </Button>
                </div>
            )}
            </div> 
                }
                

                {activateForm === false ? <ViewNotificationComponent /> : <FormNotificationComponent />}

            </div>

      </div>
};

export default Notifications;
