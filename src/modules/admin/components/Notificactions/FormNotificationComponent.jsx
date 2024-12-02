import { Divider, Input, Select, SelectItem, Textarea } from "@nextui-org/react"

const FormNotificationComponent = () => {

    const destinatarios = [
        { key: "1", label: "Gobierno" },
        { key: "2", label: "ONG" },
        { key: "3", label: "Empresa" },
        { key: "4", label: "Particular" },
    ]

    const menuDest = [
        { key: "1", label: "Feedpage" },
        { key: "2", label: "Contratos" },
        { key: "3", label: "Perfil" },
        { key: "4", label: "Finanzas" },
    ]

  return (
    <div className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-md">
        <h1 className="text-xl font-semibold text-gray-800">Datos de la Notificación</h1>
        <Divider className="my-4" />
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Select
                label="Destinatario(s)"
                placeholder="¿A quién va dirigido?"
                labelPlacement="outside"
                className="max-w-xs"
                >
                {destinatarios.map((dest) => (
                    <SelectItem key={dest.key}>
                    {dest.label}
                    </SelectItem>
                ))}
            </Select>
            <Select
                label="Menú de destino"
                placeholder="¿Cual es el menú destino?"
                labelPlacement="outside"
                className="max-w-xs"
                >
                {menuDest.map((dest) => (
                    <SelectItem key={dest.key}>
                    {dest.label}
                    </SelectItem>
                ))}
            </Select>
            <Input
                type="text"
                label="Titulo"
                placeholder="ej. Actualiza tu información"
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
    </div>
  )
}

export default FormNotificationComponent