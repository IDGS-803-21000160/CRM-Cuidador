const AuthLayout = ({ children }) => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full ">{children}</div>
    </div>
  );
};

export default AuthLayout;
