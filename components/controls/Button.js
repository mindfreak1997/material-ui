import React from 'react'
import { Button as MuiButton } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyle=makeStyles(theme=>({
    root:{
     margin:theme.spacing(0.5)      
    },
    label:{
        textTransform:'none'
    }
}))
const Button = (props) => {
    
    const {size,text,color,variant,onClick,...other}=props
    const classes=useStyle()
    return (
        <MuiButton
        style={{margin:'5px'}}
        size={size || 'large'}
        color={color || 'primary'}
        variant={variant || 'contained'}
        onClick={onClick}
        {...other}
        classes={{root:classes.root,label:classes.label}}>{text}</MuiButton>
    )
}

export default Button
