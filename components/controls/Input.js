import { TextField } from '@mui/material'
import React from 'react'

const Input = (props) => {
    const {name,label,value,onChange,error,...other}=props
    return (
        <TextField
       
                   variant='outlined'
                   label={label}
                   value={value}
                   name={name}
                   onChange={onChange}
                   {...other}
                   {...(error && {error:true,helperText:error})}/>
    )
}

export default Input
