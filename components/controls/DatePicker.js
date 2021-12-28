import { TextField } from '@mui/material'
import React from 'react'

const DatePicker = (props) => {
    const {name,label,value,onChange}=props
    return (
        <TextField
        id="date"
        label={label}
        name={name}
        onChange={onChange}
        type="date"
        defaultValue={value}
        sx={{ width: 220 }}
        InputLabelProps={{
          shrink: true,
        }}
      />
    )
}

export default DatePicker

