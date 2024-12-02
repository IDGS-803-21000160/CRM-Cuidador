/* eslint-disable react/prop-types */
import { Button, Divider, Input, Textarea } from "@nextui-org/react"
import { useEffect, useState } from "react"


const FormOrgComponent = ({ organizations, save, cancel }) => {

    const [organizationEdit, setOrganizationEdit] = useState({
        id_personamoral: 0,
        razon_social: "",
        nombre_comercial: "",
        rfc: "",
        telefono: "",
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

    useEffect(() => {
        console.log("Organizations:", organizations.razon_social)
        if(organizations.length > 0){
            setOrganizationEdit(organizations)
        }
    }
    , [organizations])

return (
    <div className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-md">
        <h1 className="text-xl font-semibold text-gray-800">Datos de la Organización</h1>
        <Divider className="my-4" />
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
                type="text"
                label="Razón social"
                value={organizationEdit.razon_social}
                onChange={(e) => setOrganizationEdit({ ...organizationEdit, razon_social: e.target.value })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="text"
                label="Nombre comercial"
                value={organizationEdit.nombre_comercial}
                onChange={(e) => setOrganizationEdit({ ...organizationEdit, nombre_comercial: e.target.value })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="text"
                label="RFC"
                value={organizationEdit.rfc}
                onChange={(e) => setOrganizationEdit({ ...organizationEdit, rfc: e.target.value })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="number"
                label="Teléfono"
                value={organizationEdit.telefono}
                onChange={(e) => setOrganizationEdit({ ...organizationEdit, telefono: e.target.value })}
                labelPlacement="outside"
                startContent={
                    <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">+</span>
                    </div>
                }
                className="w-full md:w-1/2"
            />
            <Input
                type="email"
                label="Correo electrónico"
                value={organizationEdit.correo_electronico}
                onChange={(e) => setOrganizationEdit({ ...organizationEdit, correo_electronico: e.target.value })}
                labelPlacement="outside"
                startContent={
                    <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">@</span>
                    </div>
                }
                className="w-full md:w-1/2"
            />
        </div>

        <h1 className="text-xl font-semibold text-gray-800 mt-12">Domicilio de la Organización</h1>
        <Divider className="my-4" />
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
                type="text"
                label="Calle"
                value={organizationEdit.calle}
                onChange={(e) => setOrganizationEdit({ ...organizationEdit, calle: e.target.value })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="text"
                label="Colonia"
                value={organizationEdit.colonia}
                onChange={(e) => setOrganizationEdit({ ...organizationEdit, colonia: e.target.value })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="text"
                label="Número exterior"
                value={organizationEdit.numero_exterior}
                onChange={(e) => setOrganizationEdit({ ...organizationEdit, numero_exterior: e.target.value })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="text"
                label="Número interior"
                value={organizationEdit.numero_interior}
                onChange={(e) => setOrganizationEdit({ ...organizationEdit, numero_interior: e.target.value })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
        </div>

        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
                type="text"
                label="Ciudad"
                value={organizationEdit.ciudad}
                onChange={(e) => setOrganizationEdit({ ...organizationEdit, ciudad: e.target.value })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="text"
                label="Estado"
                value={organizationEdit.estado}
                onChange={(e) => setOrganizationEdit({ ...organizationEdit, estado: e.target.value })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="text"
                label="País"
                value={organizationEdit.pais}
                onChange={(e) => setOrganizationEdit({ ...organizationEdit, pais: e.target.value })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Textarea
                type="text"
                label="Referencias"
                value={organizationEdit.referenciasDomicilio}
                onChange={(e) => setOrganizationEdit({ ...organizationEdit, referenciasDomicilio: e.target.value })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
        </div>

        <div className="flex flex-row justify-center">
            <Button color="primary" className="me-2" onClick={() => save(organizationEdit, (organizations.length > 0 ? "edit" : "new"))}>Guardar Cambios</Button>
            <Button color="error" className="ms-2" onClick={cancel}>Cancelar</Button>
        </div>

    </div>
)
}

export default FormOrgComponent