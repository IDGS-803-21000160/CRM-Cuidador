import GlobalListUsers from "../../../components/GlobalListUsers";

const AplicationsAdults = () => {
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

  return <GlobalListUsers itemsUser={itemsUser}></GlobalListUsers>;
};

export default AplicationsAdults;
