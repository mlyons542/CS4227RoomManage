import { createColumnHelper } from '@tanstack/react-table'
import { TableCell } from './TableCell'
import { testData } from './data'
import { EditCell } from './EditCell' 

const columnHelper = createColumnHelper<testData>()

export const columns = [
    columnHelper.accessor('room', {
        header: 'Room Number',
        cell: TableCell,
        meta: {
            type: 'text',
        }
    }),
    columnHelper.accessor('time', {
        header: 'Time',
        cell: TableCell,
        meta: {
            type: 'text',
        }
    }),
    columnHelper.accessor('date', {
        header: 'Date',
        cell: TableCell,
        meta: {
            type: 'text',
        }
    }),
    columnHelper.display({
        id: 'edit',
        cell: EditCell,
    }),
]

