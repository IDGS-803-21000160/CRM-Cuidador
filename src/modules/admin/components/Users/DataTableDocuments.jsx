/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
//   Chip,
  Pagination,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
//   User,
} from "@nextui-org/react";
import {capitalize} from "../../../../lib/utils.js";
// import ModalPreviewDocs from "./ModalPreviewDocs.jsx";
// const statusColorMap = {
//   ACTIVO: "success",
//   NO_VALIDADO: "danger",
//   ESPERA: "warning",
// };

const columns = [
{name: "ID", uid: "idDocumentacion", sortable: true},
{name: "TIPO", uid: "tipoDocumento", sortable: true},
{name: "NOMBRE", uid: "nombreDocumento", sortable: true},
{name: "DOC", uid: "urlDocumento", sortable: true},
{name: "EMISIÓN", uid: "fechaEmision", sortable: true},
{name: "EXPIRACIÓN", uid: "fechaExpiracion", sortable: true},
{name: "VERSIÓN", uid: "version", sortable: true},
// {name: "ESTATUS", uid: "estatusDocumento", sortable: true},
{name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
{name: "Activo", uid: "ACTIVO"},
{name: "No validado", uid: "NO VALIDADO"},
{name: "Espera", uid: "ESPERA"},
];

const INITIAL_VISIBLE_COLUMNS = ["idDocumentacion", "tipoDocumento", "nombreDocumento", "fechaEmision", "estatusDocumento", "actions"]

export default function DataTableDocuments({ docs, onAction}) {
  
  const [filterValue, setFilterValue] = React.useState("");
  const [setSelectedKeys] = React.useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = React.useState(new Set(INITIAL_VISIBLE_COLUMNS));
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState({
    column: "idDocumentacion",
    direction: "ascending",
  });

  const [page, setPage] = React.useState(1);

  const {isOpen, onOpen, onClose} = useDisclosure();
  const [currentDoc, setCurrentDoc] = useState("");

  const handleOpen = (document) => {
    onOpen();
    setCurrentDoc(document);
  }

  const hasSearchFilter = Boolean(filterValue);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
  }, [columns, visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filtereddocs = [...docs];

    if (hasSearchFilter) {
      filtereddocs = filtereddocs.filter((doc) =>
        doc.nombreDocumento.toLowerCase().includes(filterValue.toLowerCase()),
      );
    }
    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filtereddocs = filtereddocs.filter((doc) =>
        Array.from(statusFilter).includes(doc.estatusDocumento),
      );
    }

    return filtereddocs;
  }, [docs, hasSearchFilter, statusFilter, statusOptions.length, filterValue]);

  const pages = Math.ceil(filteredItems.length / rowsPerPage);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback((doc, columnKey) => {
    const cellValue = doc[columnKey];

    switch (columnKey) {
    //   case "nombre":
    //     return (
    //       <User
    //         avatarProps={{radius: "lg", }}
    //         description={doc.urlDocumento}
    //         name={cellValue}
    //       >
    //         {doc.nombreDocumento}
    //       </User>
    //     );
    //   case "estatusDocumento":
    //     return (
    //       <Chip className="capitalize" color={statusColorMap[doc.estatusDocumento]} size="sm" variant="flat">
    //         {cellValue}
    //       </Chip>
    //     );
      case "actions":
        return (
          <div className="relative flex justify-end items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button isIconOnly size="sm" variant="light">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                  <path fillRule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clipRule="evenodd" />
                </svg>
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem onClick={() => onAction(doc.id_persona)}>Editar</DropdownItem>
                <DropdownItem onClick={() => onAction(doc.id_persona)}>Borrar</DropdownItem>
                <DropdownItem
                    onPress={() => handleOpen(doc.urlDocumento)} >Ver</DropdownItem>
                <DropdownItem>Rechazar</DropdownItem>
              </DropdownMenu>
            </Dropdown>

          </div>
        );
      default:
        return cellValue;
    }
  });

  const onNextPage = React.useCallback(() => {
    if (page < pages) {
      setPage(page + 1);
    }
  }, [page, pages]);

  const onPreviousPage = React.useCallback(() => {
    if (page > 1) {
      setPage(page - 1);
    }
  }, [page]);

  const onRowsPerPageChange = React.useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  const onSearchChange = React.useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onClear = React.useCallback(()=>{
    setFilterValue("")
    setPage(1)
  },[])

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Buscar por nombre..."
            // startContent={<SearchIcon />}
            value={filterValue}
            onClear={() => onClear()}
            onValueChange={onSearchChange}
          />

          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">

              <Button endContent={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                      </svg>
                  } variant="flat">
                  Estatus
              </Button>

              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">

                <Button endContent={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                    <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
                      </svg>
                  } variant="flat">
                  Columnas
                </Button>

              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>

        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total {docs.length} usuarios</span>
          <label className="flex items-center text-default-400 text-small">
            Filas por página:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [filterValue, onSearchChange, statusFilter, statusOptions, visibleColumns, columns, docs.length, onRowsPerPageChange, onClear]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <span className="w-[30%] text-small text-default-400">
          
        </span>
        <Pagination
          isCompact
          showControls
          showShadow
          color="primary"
          page={page}
          total={pages}
          onChange={setPage}
        />
        <div className="hidden sm:flex w-[30%] justify-end gap-2">
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
            Anterior
          </Button>
          <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
            Siguiente
          </Button>
        </div>
      </div>
    );
  }, [page, pages, onPreviousPage, onNextPage]);

return (
    <>
            <Table
            aria-label="Example table with custom cells, pagination and sorting"
            isHeaderSticky
            bottomContent={bottomContent}
            bottomContentPlacement="outside"
            classNames={{
                    wrapper: "max-h-[382px]",
            }}
            sortDescriptor={sortDescriptor}
            topContent={topContent}
            topContentPlacement="outside"
            onSelectionChange={setSelectedKeys}
            onSortChange={setSortDescriptor}
            >
            <TableHeader columns={headerColumns}>
                    {(column) => (
                    <TableColumn
                            key={column.uid}
                            align={column.uid === "actions" ? "center" : "start"}
                            allowsSorting={column.sortable}
                    >
                            {column.name}
                    </TableColumn>
                    )}
            </TableHeader>
            <TableBody emptyContent={"Documentos No Encontrados!"} items={sortedItems}>
                    {(item) => (
                    <TableRow key={item.idDocumentacion}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                    </TableRow>
                    )}
            </TableBody>
            </Table>

            <Modal 
                    size="full" 
                    isOpen={isOpen} 
                    onClose={onClose} 
                    className="rounded-lg"
            >
                    <ModalContent>
                    {(onClose) => (
                            <>
                            <ModalHeader className="flex flex-col gap-1">Vista Previa del Documento</ModalHeader>
                            <ModalBody>
                                    <iframe
                                            className="rounded-lg"
                                            src={currentDoc}
                                            title="Vista previa del documento"
                                            style={{ width: "100%", height: "100%", border: "none" }}
                                    />
                            </ModalBody>
                            <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                    Cerrar
                                    </Button>
                            </ModalFooter>
                            </>
                    )}
                    </ModalContent>
            </Modal>

    </>
);
}
