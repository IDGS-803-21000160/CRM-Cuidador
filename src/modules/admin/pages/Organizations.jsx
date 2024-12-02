import { useEffect, useState } from "react"
import ViewOrgComponent from "../components/Organizations/ViewOrgComponent"
import { Button } from "@nextui-org/react"
import FormOrgComponent from "../components/Organizations/FormOrgComponent"
import { getOrganizations, newOrganization, updateOrganization, deleteOrganization, getOrganizationById } from "../services/organizationsService"

const Organizations = () => {

    const [activateForm, setActivateForm] = useState(false)

    const [organizations, setOrganizations] = useState([
        {
            id_personamoral: 1,
            razon_social: "Organización 1",
            nombre_comercial: "Org 1",
            rfc: "RFC1",
            telefono: "1234567890",
            correo_electronico: "",
            id_domicilio: 0,
            calle: "",
            colonia: "",
            numero_interior: "",
            numero_exterior: "",
            ciudad: "",
            estado: "",
            pais: ""
        }
    ])

    const [organizationEdit, setOrganizationEdit] = useState({
        id_personamoral: 1,
        razon_social: "Organización 1",
        nombre_comercial: "Org 1",
        rfc: "RFC1",
        telefono: "1234567890",
        correo_electronico: "",
        id_domicilio: 0,
        calle: "",
        colonia: "",
        numero_interior: "",
        numero_exterior: "",
        ciudad: "",
        estado: "",
        pais: "",
        referenciasDomicilio: ""
    })

    const fetchOrganizations = async () => {
        const organizations = await getOrganizations()
        setOrganizations(organizations)
    }

    const saveOrganization = async (organization) => {
        let response = await newOrganization(organization)

        if(response){
            setActivateForm(false)
        }

        fetchOrganizations()
    }

    const updateOrganizations = async (organization) => {
        await updateOrganization(organization)
        fetchOrganizations()
    }

    const deleteOrganizations = async (id) => {
        await deleteOrganization(id)
        fetchOrganizations()
    }

    const getOrganization = async (id) => {
        const organization = await getOrganizationById(id)
        setOrganizationEdit(organization)
        setActivateForm(true)
    }

    useEffect(() => {
        fetchOrganizations()
    }
    , [])

return (
    <>

        <div>

            {
                activateForm === false ? 
                    <div className="ps-4 pb-12 h-full flex justify-between items-center">
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Listado de Organizaciones</h1>
                        <Button 
                        onClick={() => setActivateForm(!activateForm)}
                        color="primary" 
                        endContent={
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6</svg>">
                                <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                            </svg>                      
                        } >Crear organización
                        </Button>
                    </div> 
                : 
                <div className="ps-4 pb-12 h-full flex items-center">
                    {/* Título alineado a la izquierda */}
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100 flex-grow">
                        Crear una nueva organización
                    </h1>
                    </div> 
                        }
                        

                        {
                        activateForm === false ? 
                            <ViewOrgComponent persons={organizations} onActionEdit={getOrganization} onDelete={deleteOrganizations}/> 
                            
                        : <FormOrgComponent organizations={organizationEdit} cancel={() => setActivateForm(false)} save={(organization, tipo) => {
                            console.log(tipo)
                            if(tipo === "new"){
                                saveOrganization(organization)
                            } else {
                                updateOrganizations(organization)
                            }
                        }}/>
                        }

                    </div>

    </>
)
}

export default Organizations