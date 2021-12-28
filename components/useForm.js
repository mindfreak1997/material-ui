import React,{useState} from 'react'
import {makeStyles} from '@mui/styles'

const useStyle=makeStyles(theme=>({
    root:{
        '& .MuiFormControl-root':{
            margin:theme.spacing(1),
            width:'80%'
        }

    }
}))
export const UseForm = (initialValues,validateOnchange=false,validate) => {
    const [values,setValues]=useState(initialValues)
    const [errors,setErrors]=useState({})
    const handleChange=(e)=>{
        const {value,name}=e.target
        setValues({
            ...values,
            [name]:value
        })
        if(validateOnchange)
        validate({[name]:value})
    }
    const handleReset=()=>{
        setValues(initialValues)
        setErrors({})
    }
    return {
        values,
        setValues,
        handleChange,
        errors,
        setErrors,
        handleReset
    }
        
}


export const Form = (props) => {
    const classes=useStyle()
    const {children,...other}=props
    return (
        <form className={classes.root} {...other}>
        {props.children}
        </form>
    )
}
