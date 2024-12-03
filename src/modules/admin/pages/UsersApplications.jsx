import { useEffect, useState } from "react";
import GlobalListUsers from "../../../components/GlobalListUsers";
import Profile from "../components/Profile";
import { getPendingUsers, mapUserData } from "../services/cuidadores";

const UsersApplications = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [itemsUser, setItemsUser] = useState([]);

  const obtenerDatosServicios = async () => {
    const data = await getPendingUsers();
    const infoMapeada = mapUserData(data);
    setItemsUser(infoMapeada);
  };

  useEffect(() => {
    obtenerDatosServicios();
  }, []);

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Profile":
        return <Profile user={selectedUser} />;
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
        className="flex-1"
      />
      <div className="flex-1 sm:ml-56 ml-0 sm:w-4/5">{renderComponent()}</div>
    </div>
  );
};

export default UsersApplications;
