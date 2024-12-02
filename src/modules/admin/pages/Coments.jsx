import { DropdownItem, DropdownMenu } from "@nextui-org/react";
import DataTable from "../../../components/Table/DataTable";
import { columns, users, statusOptions } from "../../../components/Table/data";


const Coments = () => {
  return (
    <>
            <div className="ps-4 pb-5 h-full">
              <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">Comentarios</h1>
            </div>

            <div className="">
                    <DataTable 
                            columns={columns} 
                            users={users} 
                            statusOptions={statusOptions}
                            actions={
                                    <DropdownMenu>
                                            <DropdownItem color="danger">Borrar</DropdownItem>
                                    </DropdownMenu>
                            }
                    />
            </div>
    </>
  )
};

export default Coments;
