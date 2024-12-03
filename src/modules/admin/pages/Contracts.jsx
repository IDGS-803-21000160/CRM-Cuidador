import { getContracts } from "../services/contractsService";
import DataTableContracts from "../components/Contracts/DataTableContracts";
import { useEffect, useState } from "react";

const Contracts = () => {
  const [contracts, setContracts] = useState([
    {
      idContratoItem: 0,
      horarioInicioPropuesto: "",
      horarioFinPropuesto: "",
      importeTotal: 0,
      horasContratadas: 0,
      estatusContratoItem: "",
      nombreCuidador: "",
      nombreCliente: "",
      avatarCuidador: "",
      avatarCliente: "",
    },
  ]);

  useEffect(() => {
    const fetchContracts = async () => {
      const contracts = await getContracts();
      setContracts(contracts);
    };

    fetchContracts();
  }, []);

  return (
    <div className="mt-16">
      <div className="ps-4 pb-5 h-full">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
          Contratos
        </h1>
      </div>

      <div className="">
        <DataTableContracts users={contracts} />
      </div>
    </div>
  );
};

export default Contracts;
