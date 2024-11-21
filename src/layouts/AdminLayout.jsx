import SideBar from "../modules/admin/components/SideBar";

const AdminLayout = ({ children }) => {
  return (
    <div className="admin-layout">
      <SideBar />
      <div className="admin-content">{children}</div>
    </div>
  );
};

export default AdminLayout;
