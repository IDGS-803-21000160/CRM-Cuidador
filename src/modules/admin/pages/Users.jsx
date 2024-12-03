import DataTableUsers from "../components/Users/DataTableUsers";
import DataTablePerson from "../components/Users/DataTablePerson";
import { useState, useEffect } from "react";
import {
  getUsuarios,
  getPersonById,
  getDocumentsByPersonaId,
  getDocumentsByUserId,
  getMedicalDataByUserId,
  getDataMedicalByPersonId,
  changeStatusUser,
  getSchedulesByUserId,
  changeStatusSchedule,
  getAllUsersById,
  updateUser,
} from "../services/usersService";
import DataTableDocuments from "../components/Users/DataTableDocuments";
import DataTableDataMedics from "../components/Users/DataTableDataMedics";
import DataTableSchedules from "../components/Users/DataTableSchedules";
import FormEditUser from "../components/Users/FormEditUser";

const Users = () => {
  const [usuarios, setUsers] = useState([
    {
      id_usuario: 0,
      usuario: "",
      tipoUsuario: "",
      estatusUsuario: "",
      nivelUsuario: "",
      fecha_registro: "",
      avatar_image: "",
    },
  ]);

  const [personas, setPersonas] = useState([
    {
      id_persona: 0,
      nombre: "",
      apellido_paterno: "",
      apellido_materno: "",
      fecha_nacimiento: "",
      avatar_image: "",
      genero: "",
      estado_civil: "",
      rfc: "",
      curp: "",
      telefono_particular: "",
      telefono_movil: "",
      id_domicilio: 0,
      calle: "",
      colonia: "",
      numero_interior: "",
      numero_exterior: "",
      ciudad: "",
      estado: "",
      pais: "",
      estatusPersona: "",
      esFamiliar: 0,
    },
  ]);

  const [documentos, setDocumentos] = useState([
    {
      idDocumento: 0,
      tipoDocumento: "",
      nombreDocumento: "",
      urlDocumento: "",
      fechaEmision: "",
      fechaExpiracion: "",
      version: 0,
      estatusDocumento: "",
    },
  ]);

  const [dataM, setDataM] = useState({
    idDatosmedicos: 0,
    antecedentesMedicos: "",
    alergias: "",
    tipoSanguineo: "",
    nombreMedicofamiliar: "",
    telefonoMedicofamiliar: "",
    observaciones: "",
    padecimientos: [
      {
        idPadecimiento: 0,
        nombre: "",
        descripcion: "",
        padeceDesde: "",
      },
    ],
  });

  const [horarios, setHorarios] = useState([
    {
      idSueldonivel: 0,
      usuarioid: 0,
      precioPorHora: 0,
      diaSemana: "0",
      horaInicio: "",
      horaFin: "",
      estatusid: 0,
    },
  ]);

  const [userForm, setUserForm] = useState({
    user: {
      id_usuario: 0,
      usuario: "",
      contrasenia: "",
    },
    persona: {
      id_persona: 0,
      nombre: "",
      apellido_paterno: "",
      apellido_materno: "",
      fecha_nacimiento: "",
      avatar_image: "",
      genero: "",
      estado_civil: "",
      rfc: "",
      curp: "",
      telefono_particular: "",
      telefono_movil: "",
      id_domicilio: 0,
      calle: "",
      colonia: "",
      numero_interior: "",
      numero_exterior: "",
      ciudad: "",
      estado: "",
      pais: "",
      estatusPersona: "",
      esFamiliar: 0,
    },
    datosMedicos: {
      idDatosmedicos: 0,
      antecedentesMedicos: "",
      alergias: "",
      tipoSanguineo: "",
      nombreMedicofamiliar: "",
      telefonoMedicofamiliar: "",
      observaciones: "",
      padecimientos: [
        {
          idPadecimiento: 0,
          nombre: "",
          descripcion: "",
          padeceDesde: "",
        },
      ],
    },
  });

  const [enableForm, setEnableForm] = useState(false);

  const getDataByUser = async () => {
    try {
      let json = await getUsuarios();

      if (json !== null) {
        setUsers(json);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getPerson = async (id) => {
    try {
      let json = await getPersonById(id);

      if (json !== null) {
        setPersonas(json);
        handlePageChange(1);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getDocuments = async (id, tipoUsuario) => {
    try {
      let json;
      if (tipoUsuario === "Cliente") {
        json = await getDocumentsByPersonaId(id);
      } else {
        json = await getDocumentsByUserId(id);
      }

      if (json !== null) {
        console.log(json);
        setDocumentos(json);
        console.log(documentos);
        handlePageChange(2);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getDataMedics = async (id, tipoUsuario) => {
    try {
      let json;
      if (tipoUsuario === "Cliente") {
        json = await getDataMedicalByPersonId(id);
      } else {
        json = await getMedicalDataByUserId(id);
      }
      if (json !== null) {
        setDataM(json);
        handlePageChange(3);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const changeStatusUserById = async (id, status) => {
    try {
      console.log(id, status);
      let response = await changeStatusUser(id, status);

      if (response === true) {
        getDataByUser();
      } else {
        alert("Error al cambiar el estatus del usuario");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const getSchedules = async (id) => {
    try {
      let json = await getSchedulesByUserId(id);

      if (json !== null) {
        setHorarios(json);
        handlePageChange(4);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const enableOrDisableSchedule = async (id, status, idUser) => {
    try {
      let response = await changeStatusSchedule(id, status);

      if (response === true) {
        getSchedules(idUser);
      } else {
        alert("Error al cambiar el estatus del horario");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const enableEditMode = async (id, tipo) => {
    try {
      let json = await getAllUsersById(id, tipo);

      if (json !== null) {
        setUserForm(json);
        setEnableForm(true);
        console.log(json);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const modifyUser = async (user) => {
    try {
      let response = await updateUser(user);

      if (response === true) {
        getDataByUser();
        setEnableForm(false);
      } else {
        alert("Error al cambiar el estatus del usuario");
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDataByUser();
  }, []);

  const [indexPage, setIndexPage] = useState(0);
  const [indexPageName, setIndexPageName] = useState("Usuarios");

  const handlePageChange = (index) => {
    setIndexPage(index);
    switch (index) {
      case 0:
        setIndexPageName("Usuarios");
        break;
      case 1:
        setIndexPageName("Perfiles");
        break;
      case 2:
        setIndexPageName("Documentos");
        break;
      case 3:
        setIndexPageName("Datos Médicos");
        break;
      default:
        setIndexPageName("Horarios");
        break;
    }
  };

  const backPage = () => {
    switch (indexPage) {
      case 0:
        setIndexPage(0);
        setIndexPageName("Usuarios");
        break;
      case 1:
        setIndexPage(0);
        setIndexPageName("Usuarios");
        break;
      case 2:
        setIndexPage(1);
        setIndexPageName("Perfiles");
        break;
      case 3:
        setIndexPage(0);
        setIndexPageName("Usuarios");
        break;
      case 4:
        setIndexPage(0);
        setIndexPageName("Usuarios");
        break;
      default:
        setIndexPage(2);
        setIndexPageName("Documentos");
        break;
    }
  };

  return (
    <div className="mt-16">
      {enableForm === false ? (
        <>
          <div className="ps-4 pb-5 h-full flex items-center">
            <p
              className="text-gray-500 dark:text-gray-400 me-5 text-sm"
              onClick={backPage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </p>
            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              {indexPageName}
            </h1>
          </div>

          <div className="">
            {(() => {
              switch (indexPage) {
                case 0:
                  return (
                    <DataTableUsers
                      users={usuarios}
                      onActionsProfiles={getPerson}
                      onActionDocs={getDocuments}
                      onActionDataMedics={getDataMedics}
                      onActionsEstatus={changeStatusUserById}
                      onActionsSchedules={getSchedules}
                      onActionEdit={(id, tipo) => enableEditMode(id, tipo)}
                    />
                  );
                case 1:
                  return (
                    <DataTablePerson
                      persons={personas}
                      onActionDocs={getDocuments}
                      onActionDataMedics={getDataMedics}
                      onActionEdit={() => setEnableForm(true)}
                    />
                  );
                case 2:
                  return <DataTableDocuments docs={documentos} />;
                case 3:
                  return (
                    <DataTableDataMedics
                      dataM={dataM.padecimientos}
                      informacionmedica={dataM}
                    />
                  );
                default:
                  return (
                    <DataTableSchedules
                      horarios={horarios}
                      onActionsEstatus={enableOrDisableSchedule}
                    />
                  );
              }
            })()}
          </div>
        </>
      ) : (
        <FormEditUser
          usuario={userForm}
          cancel={() => setEnableForm(false)}
          save={modifyUser}
        />
      )}
    </div>
  );
};

export default Users;
