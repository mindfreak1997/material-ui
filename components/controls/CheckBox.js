import { FormControlLabel, FormGroup,Checkbox as MuiCheckBox } from '@mui/material'
import React from 'react'

const CheckBox = (props) => {
    const {name,label,value,onChange,}=props
    const convertToDefParameter=(name,value)=>({
        target:{
            name,value
        }
    })
    return (
        <FormGroup>
        <FormControlLabel 
        checked={value}
        onChange={(e)=>onChange(convertToDefParameter(name,e.target.checked))}
        control={<MuiCheckBox defaultChecked />}
        label={label} 
        name={name}/>
      </FormGroup>
    )
}

export default CheckBox
