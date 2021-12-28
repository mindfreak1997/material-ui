import { Table, TablePagination, TableHead, TableRow, TableSortLabel } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useState } from 'react'

const useStyles=makeStyles(theme => ({
    table: {
        marginTop: theme.spacing(3),
        '& thead th': {
            fontWeight: '600',
            color: theme.palette.primary.main,
            backgroundColor: theme.palette.primary.light,
        },
        '& tbody td': {
            fontWeight: '300',
        },
        '& tbody tr:hover': {
            backgroundColor: '#fffbf2',
            cursor: 'pointer',
        },
    },
}))
export const useTable = (records,headcells) => {
    
    const Tblhead=(props)=>{
        return (
            <TableHead>
                {props.children}
            </TableHead>
        )
    }
    return {
        Tblhead
    }
}


export const TableContainer=(props)=>{
    const classes=useStyles()
    return (
<Table sx={{ minWidth: '650px' }} className={classes.table}>
{props.children}
</Table>
    )
    
}



