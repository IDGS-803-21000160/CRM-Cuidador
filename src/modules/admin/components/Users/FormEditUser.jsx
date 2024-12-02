/* eslint-disable react/prop-types */
import { Button, Divider, Input, Select, SelectItem, Textarea } from "@nextui-org/react"
import { useEffect, useState } from "react"

const generos = [
    { key: "masculino", label: "Masculino" },
    { key: "femenino", label: "Femenino" },
    { key: "no_binario", label: "No Binario" },
]

const estadoCivil = [
    { key: "Soltero", label: "Soltero" },
    { key: "Casado", label: "Casado" },
    { key: "Divorciado", label: "Divorciado" },
    { key: "Viudo", label: "Viudo" },
    { key: "Union libre", label: "Unión Libre" },
    { key: "Separado", label: "Separado" },
]

const FormEditUser = ({ usuario, save, cancel }) => {
    
    const [editUser, setEditUser] = useState({...usuario});

    useEffect(() => {
        // Se ejecuta solo una vez al montar el componente
        setEditUser({...usuario});
    }, [usuario]); // La dependencia vacía asegura que esto solo ocurra una vez

  return (
    <div className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-md">
        <h1 className="text-xl font-semibold text-gray-800">Datos del Usuario</h1>
        <Divider className="my-4" />
        <div className="flex w-full flex-wrap md:flex-nowrap mb-2 md:mb-0 gap-4">
            <Input
                type="text"
                label="Nombre de Usuario"
                placeholder="Nombre de usuario"
                value={editUser.user.usuario}
                labelPlacement="outside"
                onChange={(e) => setEditUser({
                    ...editUser, 
                    user: { ...editUser.user, usuario: e.target.value }
                })}
                className="w-full md:w-1/2"
            />
            <Input
                type="text"
                label="Contraseña"
                placeholder="********"
                value={editUser.user.contrasenia}
                onChange={(e) => setEditUser({
                    ...editUser, 
                    user: { ...editUser.user, contrasenia: e.target.value }
                })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
        </div>

        <h1 className="text-xl font-semibold text-gray-800 mt-12">Datos Personales</h1>
        <Divider className="my-4" />
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
                type="text"
                label="Nombre"
                placeholder="ej. Juan"
                value={editUser.persona.nombre}
                onChange={(e) => setEditUser({
                    ...editUser,
                    persona: { ...editUser.persona, nombre: e.target.value }
                })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="text"
                label="Apellido Paterno"
                placeholder="ej. Pérez"
                value={editUser.persona.apellido_paterno}
                onChange={(e) => setEditUser({
                    ...editUser,
                    persona: { ...editUser.persona, apellido_paterno: e.target.value }
                })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="text"
                label="Apellido Materno"
                placeholder="ej. López"
                value={editUser.persona.apellido_materno}
                onChange={(e) => setEditUser({
                    ...editUser,
                    persona: { ...editUser.persona, apellido_materno: e.target.value }
                })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="email"
                label="Correo electrónico"
                value={editUser.persona.correo_electronico}
                onChange={(e) => setEditUser({
                    ...editUser,
                    persona: { ...editUser.persona, correo_electronico: e.target.value }
                })}
                placeholder="ej. email@example.com"
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
        </div>

        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
                type="date"
                label="Fecha de Nacimiento"
                onChange={(e) => setEditUser({
                    ...editUser,
                    persona: { ...editUser.persona, fecha_nacimiento: e.target.value }
                })}
                className="w-full md:w-1/2"
            />
            <Select
                label="Género"
                placeholder="Selecciona una opción"
                labelPlacement="outside"
                className="w-full md:w-1/2"
                onChange={(e) => setEditUser({
                    ...editUser,
                    persona: { ...editUser.persona, genero: e.target.value }
                })}
                defaultSelectedKeys={["masculino"]}
            >
                {generos.map((genero) => (
                    <SelectItem key={genero.key}>
                        {genero.label}
                    </SelectItem>
                ))}
            </Select>
            <Select
                label="Estado Civil"
                placeholder="Selecciona una opción"
                labelPlacement="outside"
                className="w-full md:w-1/2"
                onChange={(e) => setEditUser({
                    ...editUser,
                    persona: { ...editUser.persona, estado_civil: e.target.value }
                })}
                defaultSelectedKeys={["Soltero"]}
            >
                {estadoCivil.map((estado) => (
                    <SelectItem key={estado.key}>
                        {estado.label}
                    </SelectItem>
                ))}
            </Select>
            <Input
                type="text"
                label="RFC"
                placeholder="ej. PEJR010101HD09"
                value={editUser.persona.rfc}
                onChange={(e) => setEditUser({
                    ...editUser,
                    persona: { ...editUser.persona, rfc: e.target.value }
                })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
        </div>

        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
                type="text"
                label="CURP"
                placeholder="ej. PEJR010101HDFLNS09"
                value={editUser.persona.curp}
                onChange={(e) => setEditUser({
                    ...editUser,
                    persona: { ...editUser.persona, curp: e.target.value }
                })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="text"
                label="Teléfono Particular"
                placeholder="ej. 55 1234 5678"
                value={editUser.persona.telefono_particular}
                onChange={(e) => setEditUser({
                    ...editUser,
                    persona: { ...editUser.persona, telefono_particular: e.target.value }
                })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="text"
                label="Teléfono Celular"
                placeholder="ej. 55 1234 5678"
                value={editUser.persona.telefono_movil}
                onChange={(e) => setEditUser({
                    ...editUser,
                    persona: { ...editUser.persona, telefono_movil: e.target.value }
                })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="text"
                label="Teléfono de Emergencia"
                placeholder="ej. 55 1234 5678"
                value={editUser.persona.telefono_emergencia}
                onChange={(e) => setEditUser({
                    ...editUser,
                    persona: { ...editUser.persona, telefono_emergencia: e.target.value }
                })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
        </div>

        <h1 className="text-xl font-semibold text-gray-800 mt-12">Datos del Domicilio</h1>
        <Divider className="my-4" />
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
                type="text"
                label="Calle"
                placeholder="ej. Av. Reforma"
                value={editUser.persona.calle}
                onChange={(e) => setEditUser({
                    ...editUser,
                    persona: { ...editUser.persona, calle: e.target.value }
                })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="text"
                label="Colonia"
                placeholder="ej. Centro"
                value={editUser.persona.colonia}
                onChange={(e) => setEditUser({
                    ...editUser,
                    persona: { ...editUser.persona, colonia: e.target.value }
                })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="text"
                label="Número exterior"
                placeholder="ej. 1223"
                value={editUser.persona.numero_exterior}
                onChange={(e) => setEditUser({
                    ...editUser,
                    persona: { ...editUser.persona, numero_exterior: e.target.value }
                })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="text"
                label="Número interior"
                placeholder="ej. 1B"
                value={editUser.persona.numero_interior}
                onChange={(e) => setEditUser({
                    ...editUser,
                    persona: { ...editUser.persona, numero_interior: e.target.value }
                })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
                type="text"
                label="Ciudad"
                placeholder="ej. León"
                value={editUser.persona.ciudad}
                onChange={(e) => setEditUser({
                    ...editUser,
                    persona: { ...editUser.persona, ciudad: e.target.value }
                })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="text"
                label="Estado"
                placeholder="ej. Guanajuato"
                value={editUser.persona.estado}
                onChange={(e) => setEditUser({
                    ...editUser,
                    persona: { ...editUser.persona, estado: e.target.value }
                })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="text"
                label="País"
                placeholder="ej. México"
                value={editUser.persona.pais}
                onChange={(e) => setEditUser({
                    ...editUser,
                    persona: { ...editUser.persona, pais: e.target.value }
                })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Textarea
                label="Referencias"
                placeholder="Notas adicionales sobre el domicilio"
                value={editUser.persona.referencias}
                onChange={(e) => setEditUser({
                    ...editUser,
                    persona: { ...editUser.persona, referencias: e.target.value }
                })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
        </div>

        <h1 className="text-xl font-semibold text-gray-800 mt-12">Datos Médicos</h1>
        <Divider className="my-4" />
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
                type="text"
                label="Antecedentes Médicos"
                placeholder="ej. Diabetes"
                value={editUser.datosMedicos.antecedentesMedicos}
                onChange={(e) => setEditUser({
                    ...editUser,
                    datosMedicos: { ...editUser.datosMedicos, antecedentesMedicos: e.target.value }
                })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="text"
                label="Alergias"
                placeholder="ej. Polen"
                value={editUser.datosMedicos.alergias}
                onChange={(e) => setEditUser({
                    ...editUser,
                    datosMedicos: { ...editUser.datosMedicos, alergias: e.target.value }
                })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="text"
                label="Tipo de Sangre"
                placeholder="ej. A+"
                value={editUser.datosMedicos.tipoSanguineo}
                onChange={(e) => setEditUser({
                    ...editUser,
                    datosMedicos: { ...editUser.datosMedicos, tipoSanguineo: e.target.value }
                })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Input
                type="text"
                label="Nombre del Médico"
                placeholder="ej. Dr. Juan Pérez"
                value={editUser.datosMedicos.nombreMedicofamiliar}
                onChange={(e) => setEditUser({
                    ...editUser,
                    datosMedicos: { ...editUser.datosMedicos, nombreMedicofamiliar: e.target.value }
                })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
        </div>
        <div className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4">
            <Input
                type="text"
                label="Telefono del Médico"
                placeholder="ej. Diabetes"
                value={editUser.datosMedicos.telefonoMedicofamiliar}
                onChange={(e) => setEditUser({
                    ...editUser,
                    datosMedicos: { ...editUser.datosMedicos, telefonoMedicofamiliar: e.target.value }
                })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
            <Textarea
                type="text"
                label="Observaciones"
                placeholder="ej. Medicamentos recetados"
                value={editUser.datosMedicos.observaciones}
                onChange={(e) => setEditUser({
                    ...editUser,
                    datosMedicos: { ...editUser.datosMedicos, observaciones: e.target.value }
                })}
                labelPlacement="outside"
                className="w-full md:w-1/2"
            />
        </div>

        <div className="flex flex-row justify-center">
            <Button color="primary" className="me-2" onClick={() => save(editUser)}>Guardar Cambios</Button>
            <Button color="error" className="ms-2" onClick={cancel}>Cancelar</Button>
        </div>

    </div>
  )
}

export default FormEditUser