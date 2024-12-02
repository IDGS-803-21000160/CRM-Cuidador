import { useState } from "react";
import GlobalListUsers from "../../../components/GlobalListUsers";
import Profile from "../components/Profile";
import CaregiverApplications from "../components/CaregiverApplications";

const UsersApplications = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const itemsUser = [
    {
      id_usuario: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      avatarImage: "/public/user-5.jpg",
    },
    {
      id_usuario: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      avatarImage: "/public/user-5.jpg",
    },
    {
      id_usuario: 3,
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      avatarImage: "/public/user-5.jpg",
    },
  ];

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Profile":
        return <Profile />;
      case "CaregiverApplications":
        return (
          <CaregiverApplications
            itemsUser={itemsUser}
            setSelectedUser={setSelectedUser}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <GlobalListUsers
        itemsUser={itemsUser}
        setSelectedComponent={setSelectedComponent}
        className="flex-1"
      />
      <div className="flex-1 sm:ml-56 ml-0 sm:w-4/5">{renderComponent()}</div>
    </div>
  );
};

export default UsersApplications;
