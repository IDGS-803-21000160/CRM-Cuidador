const CardIndicator = ({ icon, title, value, percentage, color }) => {
    return (
      <div className="flex flex-col p-4 bg-white rounded-lg shadow-md w-full h-full">
        {/* Ícono */}
        <div className={`flex items-center justify-center w-12 h-12 ${color} text-white rounded-lg shadow-md`}>
          {icon}
        </div>
  
        {/* Título y Valor */}
        <div className="mt-4">
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 truncate">{value}</p>
        </div>
  
        {/* Porcentaje */}
        <div className="mt-2 text-xs sm:text-sm md:text-base lg:text-lg text-gray-400">
          <span className="font-semibold text-green-500">{percentage}</span>
          <span className="block sm:hidden md:hidden"></span> {/* Para pantallas pequeñas */}
          <span className="hidden sm:inline md:inline"> anteriormente</span> {/* Para pantallas medianas o más grandes */}
        </div>
        
      </div>
    );
  };
  
  export default CardIndicator;