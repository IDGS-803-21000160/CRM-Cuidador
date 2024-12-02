/* eslint-disable react/prop-types */
"use client";
import { AreaChart } from "@tremor/react";


export const LinearAreaChart = ({chartData}) => (
  <AreaChart
    lang="es"
    className="h-96 w-full rounded-lg p-4 bg-white dark:bg-gray-900 dark:text-white text-sm " 
    data={chartData}
    index="mes"
    categories={["importeConcluidos", "importePendientes"]}
    valueFormatter={(number) =>
      `$${Intl.NumberFormat("us").format(number).toString()}`
    }
  />
)