/* eslint-disable react/prop-types */
"use client"

import {
    Table,
    TableBody,
    // TableCaption,
    TableCell,
    TableFoot,
    TableHead,
    TableHeaderCell,
    TableRow,
  } from "@tremor/react"  
  
  export function TableChart({ data }) {

    const totalImporte = data.reduce((sum, item) => sum + item.importe_total, 0);

    return (
      <Table className=" text-sm ">
        {/* <TableCaption>Recent invoices.</TableCaption> */}
        <TableHead className="">
        <TableRow>
          <TableHeaderCell>Cliente</TableHeaderCell>
          <TableHeaderCell>Importe ($)</TableHeaderCell>
          <TableHeaderCell>Cuidador</TableHeaderCell>
          <TableHeaderCell>Estatus</TableHeaderCell>
          <TableHeaderCell className="text-right">
          Horas Contratadas (h)
          </TableHeaderCell>
        </TableRow>
        </TableHead>
        <TableBody>
        {data.map((item) => (
          <TableRow key={item.id_contratoitem}>
          <TableCell>{item.cliente}</TableCell>
          <TableCell className="text-right">{item.importe_total}</TableCell>
          <TableCell>{item.cuidador}</TableCell>
          <TableCell>{item.estatus}</TableCell>
          <TableCell className="text-right">{item.horasContratadas}</TableCell>
          </TableRow>
        ))}
        </TableBody>
        <TableFoot>
        <TableRow>
          <TableHeaderCell colSpan={2} scope="row" className="text-right">
          {totalImporte}
          </TableHeaderCell>
          <TableHeaderCell colSpan={3} scope="row" className="text-right">
          497
          </TableHeaderCell>
        </TableRow>
        </TableFoot>
      </Table>
    )
  }