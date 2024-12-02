/* eslint-disable react/prop-types */
"use client"

import { BarChart } from "@tremor/react"

export const BarChartComponent = ({chartdata}) => (
  <BarChart
    className="h-80 w-full p-4 text-sm"
    data={chartdata}
    index="mes"
    categories={["clientes", "cuidadores"]}
    valueFormatter={(number) =>
      `${Intl.NumberFormat("us").format(number).toString()}`
    }
    onValueChange={(v) => console.log(v)}
  />
)