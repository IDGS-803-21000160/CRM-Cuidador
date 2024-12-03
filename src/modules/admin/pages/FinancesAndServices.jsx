import { useEffect, useState } from "react";
import { getUsersActives, mapUserData } from "../services/financesCuidador";
import ProfileActive from "../components/Finance/ProfileActive";
import GlobalListUsers from "../../../components/GlobalListUsers";

const FinancesAndServices = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [itemsUser, setItemsUser] = useState([]);

  const obtenerDatosServicios = async () => {
    const data = await getUsersActives();
    console.log("Data antes de mapear", data);

    const infoMapeada = mapUserData(data);
    setItemsUser(infoMapeada);
  };

  useEffect(() => {
    obtenerDatosServicios();
  }, []);

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Profile":
        return <ProfileActive user={selectedUser} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <GlobalListUsers
        itemsUser={itemsUser}
        setSelectedComponent={setSelectedComponent}
        setSelectedUser={setSelectedUser}
        title={"Fin. y Ser."}
        className="flex-1"
      />
      <div className="flex-1 sm:ml-56 ml-0 sm:w-4/5">{renderComponent()}</div>
    </div>
  );
};

export default FinancesAndServices;
