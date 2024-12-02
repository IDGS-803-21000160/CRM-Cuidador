import { DropdownItem, DropdownMenu } from "@nextui-org/react"
import DataTable from "../../../../components/Table/DataTable"
import { columns, users, statusOptions } from "../../../../components/Table/data"


const ViewTrainingComponent = () => {
  return (
    <>
            <div className="">
                    <DataTable 
                            columns={columns} 
                            users={users} 
                            statusOptions={statusOptions}
                            actions={
                                    <DropdownMenu>
                                            <DropdownItem>Editar</DropdownItem>
                                            <DropdownItem>Borrar</DropdownItem>
                                            <DropdownItem>Bloquear</DropdownItem>
                                    </DropdownMenu>
                            }
                    />
            </div>
    </>
  )
}

export default ViewTrainingComponent