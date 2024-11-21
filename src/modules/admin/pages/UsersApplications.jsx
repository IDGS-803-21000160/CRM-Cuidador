import { useState } from "react";
import GlobalListUsers from "../../../components/GlobalListUsers";
import Profile from "../components/Profile";

const UsersApplications = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

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
            avatarImage: "https://example.com/avatar1.jpg",
          },
        },
        {
          usuario: {
            id_usuario: 2,
            name: "Jane Smith",
          },
          persona: {
            avatarImage: "https://example.com/avatar2.jpg",
          },
        },
      ],
    },
    {
      routerLink: "/another-path",
      users: [
        {
          usuario: {
            id_usuario: 3,
            name: "Alice Johnson",
          },
          persona: {
            avatarImage: "https://example.com/avatar3.jpg",
          },
        },
      ],
    },
  ];

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Profile":
        return <Profile />;
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
