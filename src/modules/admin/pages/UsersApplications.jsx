import { useState } from "react";
import GlobalListUsers from "../../../components/GlobalListUsers";
import Profile from "../components/Profile";

const UsersApplications = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  const itemsUser = [
    {
      routerLink: "/some-path",
      users: [
        {
          usuario: {
            id_usuario: 1,
            name: "John Doe",
          },
          persona: {
            avatarImage: "/public/user-5.jpg",
            name: "John Doe",
            correoElectronico: "iblancarte583@gmail.com",
          },
        },
        {
          usuario: {
            id_usuario: 2,
            name: "Jane Smith",
          },
          persona: {
            avatarImage: "/public/user-5.jpg",
            name: "Sofia",
            correoElectronico: "iblancarte583@gmail.com",
          },
        },
      ],
    },
  ];

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
      <div
        className="flex-1 sm:ml-56 ml-0 sm:w-4/5"
        style={{ backgroundColor: "blue" }}
      >
        {renderComponent()}
      </div>
    </div>
  );
};

export default UsersApplications;
