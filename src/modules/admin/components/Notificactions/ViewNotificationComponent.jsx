import { DropdownItem, DropdownMenu } from "@nextui-org/react"
import DataTable from "../../../../components/Table/DataTable"
import { columns, users, statusOptions } from "../../../../components/Table/data"

const ViewNotificationComponent = () => {
  return (
    <>
            <div className="">
                    <DataTable 
                            columns={columns} 
                            users={users} 
                            statusOptions={statusOptions}
                            actions={
                                    <DropdownMenu>
                                            <DropdownItem>Enviar de Nuevo</DropdownItem>
                                            <DropdownItem>Borrar</DropdownItem>
                                    </DropdownMenu>
                            }
                    />
            </div>
    </>
  )
}

export default ViewNotificationComponent