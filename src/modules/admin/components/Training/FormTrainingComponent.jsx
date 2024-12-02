import { Divider, Input, Select, SelectItem, Textarea } from "@nextui-org/react"

const FormTrainingComponent = () => {

    const usuarioDestino = [
        { key: "1", label: "Cuidadores" },
        { key: "2", label: "Clientes" },
        { key: "3", label: "Todos" },
        { key: "4", label: "Organizaciones" },
        { key: "5", label: "Administrativos" },
    ]

  return (
    <div className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-md">
        <h1 className="text-xl font-semibold text-gray-800">Datos del curso</h1>
        <Divider className="my-4" />
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
                type="text"
                label="Nombre del curso"
                placeholder="ej. Introducción a Cuidador"
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="url"
                label="URL del PDF, DOCX, Video, etc."
                placeholder="ej. www.example.com"
                labelPlacement="outside"
                startContent={
                    <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">https://</span>
                    </div>
                }
                className="w-full md:w-1/2"
            />
            <Input
                type="number"
                label="Calificación mínima aprobatoria"
                placeholder="6"
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="number"
                label="Calificación maxima"
                placeholder="10"
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
        </div>
        <Textarea
            type="text"
            label="Descripción"
            placeholder="Agrega una descripción"
            labelPlacement="outside"
            className="w-full md:w-1/2"
        />

        <h1 className="text-xl font-semibold text-gray-800 mt-12">Fechas y objetivo de la capacitación</h1>
        <Divider className="my-4" />
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
                type="date"
                label="Fecha de inicio"
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
           <Input
                type="date"
                label="Fecha de expiración"
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />  
            <Select
                label="Tipo de usuario destino"
                placeholder="¿A que tipo de usuarios va dirigido?"
                labelPlacement="outside"
                className="max-w-xs"
                >
                {usuarioDestino.map((dest) => (
                    <SelectItem key={dest.key}>
                    {dest.label}
                    </SelectItem>
                ))}
            </Select>
        </div>
    </div>
  )
}

export default FormTrainingComponent