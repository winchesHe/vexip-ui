<template>
  <Table
    :data="data"
    :row-class="rowClass"
    :width="1000"
    :head-class="headClass"
    :head-style="headStyle"
    :head-attrs="hadeAttrs"
    :cell-class="cellClass"
  >
    <TableColumn
      name="First Name"
      id-key="firstName"
      :attrs="{ 'data-label': 'First Name' }"
    ></TableColumn>
    <TableColumn name="Last Name" id-key="lastName" class-name="demo-column-class"></TableColumn>
    <TableColumn name="Job" id-key="job" style="font-weight: bold;"></TableColumn>
    <TableColumn name="Age" id-key="age"></TableColumn>
  </Table>
</template>

<script setup lang="ts">
import type { TableColumnOptions } from 'vexip-ui'

type ItemType<D> = D extends (infer I)[] ? I : Record<string, any>

const data = [
  {
    id: '1',
    job: 'Cashier',
    email: 'Angelique_Walsh2268@twace.org',
    firstName: 'Angelique',
    lastName: 'Walsh',
    age: '58'
  },
  {
    id: '2',
    job: 'Stockbroker',
    email: 'Aeris_Drake5867@gmail.com',
    firstName: 'Aeris',
    lastName: 'Drake',
    age: '40'
  },
  {
    id: '3',
    job: 'Machine Operator',
    email: 'Elisabeth_Rogers7566@sheye.org',
    firstName: 'Elisabeth',
    lastName: 'Rogers',
    age: '56'
  },
  {
    id: '4',
    job: 'Audiologist',
    email: 'Sharon_Tanner5855@nickia.com',
    firstName: 'Sharon',
    lastName: 'Tanner',
    age: '58'
  },
  {
    id: '5',
    job: 'Cashier',
    email: 'Evie_Farmer6650@typill.biz',
    firstName: 'Evie',
    lastName: 'Farmer',
    age: '26'
  }
]

const rowClass = 'demo-row-class'

function headClass(column: TableColumnOptions, index: number) {
  return `head-${index}`
}

function headStyle(column: TableColumnOptions, index: number) {
  return {
    color: `var(--vxp-color-error-opacity-${index + 1})`
  }
}

function hadeAttrs(column: TableColumnOptions, index: number) {
  return {
    'data-index': index
  }
}

function cellClass(
  row: ItemType<typeof data>,
  column: TableColumnOptions,
  rowIndex: number,
  columnIndex: number
) {
  return `cell-${rowIndex}-${columnIndex}`
}
</script>

<style scoped>
:deep(.demo-row-class) {
  color: #339af0;
}

:deep(.demo-column-class) {
  background-color: #fab005;
}
</style>
