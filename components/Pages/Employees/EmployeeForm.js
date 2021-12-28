import { Grid } from '@mui/material'
import React,{useEffect} from 'react'
import { Controls } from '../../controls/Controls'
import DatePicker from '../../controls/DatePicker'
import { Form, UseForm } from '../../useForm'
import { v4 as uuidv4 } from 'uuid'
import { insertEmployees } from '../../../services/employeeServices'

const initialValues={
    id:0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'male',
    departmentId:'',
    hireDate:new Date(),
    isPermanent:false
}
const genderItems=[
    {id:'male',title:'male'},
    {id:'female',title:'female'},
    {id:'Others',title:'Others'}
]
const getDepartmentItems=[
    {id:'1',title:'devolopment'},
    {id:'2',title:'marketing'},
    {id:'3',title:'finance'},
    {id:'4',title:'HR'},
]
const EmployeeForm = ({addOrEdit,recordForEdit }) => {
    
    const validate=(feildValues=values)=>{
        const error={...errors}
        if('fullName' in feildValues)
        error.fullName=feildValues.fullName ? '' : 'Full Name is Required'
        if('email' in feildValues)
        error.email= (/$|.+@.+..+/).test(feildValues.email) ? '' : 'Invalid Email'
        if('mobile' in feildValues)
        error.mobile=values.mobile.length > 9 ? '' : 'mobile no should be greater than 10'
        if('city' in feildValues)
        error.city=feildValues.city ? '' : 'City is  Required'
        if('departmentId' in feildValues)
        error.departmentId=feildValues.departmentId ? '' : 'select atleast one department Id'
        setErrors({...error})
        console.log('error',error)
        if(feildValues==values)
        return Object.values(errors).every(x=>x==='')
    }
    const {values,setValues,handleChange,handleReset,errors,setErrors}=UseForm(initialValues,true,validate)
   
    useEffect(() => {
        if (recordForEdit != null)
            setValues({
                ...recordForEdit
            })
    }, [recordForEdit])

   const handleSubmit=(e)=>{
       e.preventDefault()
       if(validate()){
           const formData={
            id:uuidv4(),
            fullName:values.fullName,
            email:values.email,
            mobile:values.mobile,
            city:values.city,
            gender:values.gender,
            departmentId:values.departmentId,
            hireDate:values.hireDate,
            isPermanent:values.isPermanent
       }
       addOrEdit(formData,handleReset)
   }
}
    return (
        <Form onSubmit={handleSubmit}>
           <Grid container>
               <Grid item xs={6}>
                   <Controls.Input
                   
                   label='Full Name'
                   value={values.fullName}
                   name='fullName'
                   onChange={handleChange}
                   error={errors.fullName}/>
                   <Controls.Input
                   
                   label='Email'
                   name='email'
                   value={values.email}
                   onChange={handleChange}
                   error={errors.email}/>
                   <Controls.Input
                   
                   label='Mobile'
                   name='mobile'
                   value={values.mobile}
                   onChange={handleChange}
                   error={errors.mobile}/>
                   <Controls.Input
                   
                   label='City'
                   name='city'
                   value={values.city}
                   error={errors.city}
                   onChange={handleChange}/>
               </Grid>
               <Grid item xs={6}>
                  <Controls.RadioGroup
                   label='gender'
                   value={values.gender}
                   name='gender'
                   onChange={handleChange}
                   items={genderItems}/>
                   <Controls.Select
                      label='departmentId'
                      value={values.departmentId}
                      name='departmentId'
                      onChange={handleChange}
                      options={getDepartmentItems}
                      error={errors.departmentId}
                   />
               <DatePicker
                 label='hireDate'
                 name='hireDate'
                 defaultValue={values.hireDate} 
                 onChange={handleChange} />
               <Controls.CheckBox
               name='isPermanent'
               checked={values.isPermanent}
               onChange={handleChange}
               label='isPermanent' />    

               <div>
                  <Controls.Button
                  text='SUBMIT'
                  type='submit'
                 /> 

                  <Controls.Button
                  text='RESET'
                  color='success'
                  onClick={handleReset}/> 
               </div> 
               </Grid> 
           </Grid>
       </Form>
    )
}

export default EmployeeForm
