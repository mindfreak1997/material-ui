import { FormControl, InputLabel,MenuItem,Select as MuiSelect ,FormHelperText} from '@mui/material'
import React from 'react'

const Select = (props) => {
    const {name,label,value,onChange,options,error}=props
    return (
       <FormControl variant='outlined'
       {...(error && {error:true})}>
<InputLabel>{label}</InputLabel>
<MuiSelect
label={label}
value={value}
name={name}
onChange={onChange}
>
<MenuItem value=''>None</MenuItem>
{
    options.map(item=>{
        return <MenuItem key={item.id} value={item.title}>{item.title}</MenuItem>
    })
}
</MuiSelect>
{error && <FormHelperText>{error}</FormHelperText>}
       </FormControl>
    )
}

export default Select

