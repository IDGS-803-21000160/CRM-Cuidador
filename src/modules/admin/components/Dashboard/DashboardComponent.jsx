/* eslint-disable react/prop-types */

// import  { dashboardService } from '../services/dashboardService';

import CardIndicator from "./CardIndicator";
import userImage from "../../../../assets/dashboard/users.png";
import moneyImage from "../../../../assets/dashboard/money.png";
import salesImage from "../../../../assets/dashboard/sales.png";
import contractImage from "../../../../assets/dashboard/contract.png";
import { LinearAreaChart } from "./LinearAreaChart";
import { BarChartComponent } from "./BarChartComponent";
import { TableChart } from "./TableChartComponent";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import { getDashboardData } from "../../services/dashboardService";

// eslint-disable-next-line react/prop-types, no-unused-vars
const DashboardComponent = () => {
  const [data, setData] = useState({
    userRegister: {
      usuarios_registrados_hoy: 0,
      usuarios_registrados_anteriormente: 0,
    },
    rechargeSald: {
      saldo_recargado_hoy: 0,
      saldo_recargado_anterior: 0,
    },
    moneyPerContracts: {
      dinero_generado_hoy: 0,
      dinero_generado_anterior: 0,
    },
    newContracts: {
      contratos_hoy: 0,
      contratos_anteriores: 0,
    },
    moneyContractsPerMonth: [
      { mes: 0, importeConcluidos: 0, importePendientes: 0 },
    ],
    usersTypeClient_Cuidador: [{ mes: 0, clientes: 0, cuidadores: 0 }],
    newContractsPerMonth: [
      {
        cliente: "",
        cuidador: "",
        estatus: "",
        horasContratadas: 0,
        id_contratoitem: 0,
        importe_total: 0,
      },
    ],
  });

  const getDataByDashboard = async () => {
    try {
      let json = await getDashboardData();

      if (json !== null) {
        setData(json);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDataByDashboard();
  }, []);

  return (
    <div className="mt-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4 mt-4">
        <div className="flex items-center justify-center h-48 rounded bg-gray-50 dark:bg-gray-800 shadow-lg rounded-lg">
          <CardIndicator
            icon={
              <img src={userImage} alt="icon" />
              // eslint-disable-next-line react/prop-types
            }
            title="Usuarios Registrados Hoy"
            value={data.userRegister.usuarios_registrados_hoy}
            color={"bg-green-200"}
            percentage={data.userRegister.usuarios_registrados_anteriormente}
          />
        </div>

        <div className="flex items-center justify-center h-48 rounded bg-gray-50 dark:bg-gray-800 shadow-lg rounded-lg">
          <CardIndicator
            icon={<img src={moneyImage} alt="icon" />}
            title="Saldo Recargado Hoy"
            value={`$${data.rechargeSald.saldo_recargado_hoy}`}
            color={"bg-blue-200"}
            percentage={`$${data.rechargeSald.saldo_recargado_anterior}`}
          />
        </div>

        <div className="flex items-center justify-center h-48 rounded bg-gray-50 dark:bg-gray-800 shadow-lg rounded-lg">
          <CardIndicator
            icon={
              <img src={salesImage} alt="icon" />
              // eslint-disable-next-line react/prop-types
            }
            title="Dinero de Contratos Hoy"
            value={`$${data.moneyPerContracts.dinero_generado_hoy}`}
            color={"bg-gray-900"}
            percentage={`$${data.moneyPerContracts.dinero_generado_anterior}`}
          />
        </div>

        <div className="flex items-center justify-center h-48 rounded bg-gray-50 dark:bg-gray-800 shadow-lg rounded-lg">
          <CardIndicator
            icon={<img src={contractImage} alt="icon" />}
            title="Contratos Activos Hoy"
            value={data.newContracts.contratos_hoy}
            color={"bg-purple-200"}
            percentage={data.newContracts.contratos_anteriores}
          />
        </div>
      </div>

      <div className="grid gap-4 mb-4 grid-cols-1">
        <div className="flex items-center justify-center rounded bg-gray-50 h-96 dark:bg-gray-800 shadow-lg rounded-lg">
          <LinearAreaChart chartData={data.moneyContractsPerMonth} />
        </div>
      </div>

      <div className="grid gap-4 mb-4 grid-cols-1 sm:grid-cols-2">
        <div className="flex items-center justify-center rounded bg-gray-50 h-96 dark:bg-gray-800 shadow-lg rounded-lg">
          <BarChartComponent chartdata={data.usersTypeClient_Cuidador} />
        </div>

        <div className="overflow-x-auto overflow-y-auto max-h-[400px]">
          <TableChart data={data.newContractsPerMonth} />
        </div>
      </div>
    </div>
  );
};

DashboardComponent.propTypes = {
  data: PropTypes.shape({
    userRegister: PropTypes.shape({
      usuarios_registrados_hoy: PropTypes.number.isRequired,
      usuarios_registrados_anteriormente: PropTypes.number.isRequired,
    }).isRequired,
    rechargeSald: PropTypes.shape({
      saldo_recargado_anterior: PropTypes.number.isRequired,
      saldo_recargado_hoy: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DashboardComponent;
