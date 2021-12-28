import { FormControl, FormControlLabel, FormLabel, RadioGroup as MuiRadioGroup,Radio } from '@mui/material'
import React from 'react'

const RadioGroup = (props) => {
    const {name,label,value,onChange,items}=props
    console.log('items',items)
    return (
        <FormControl>
        <FormLabel>{label}</FormLabel>
        <MuiRadioGroup row
         value={value}
         name={name}
         onChange={onChange}
        >
            {
                items.map((item,i)=>{
                    return  <FormControlLabel value={item.id} control={<Radio/>} label={item.title} key={i}/>
                })
            }
        </MuiRadioGroup>
    </FormControl>
    )
}

export default RadioGroup