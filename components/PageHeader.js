import { Card, Paper,Typography } from '@mui/material'
import React from 'react'
import {makeStyles} from '@mui/styles'

const usestyles= makeStyles(theme=>({
    root:{
        background:'#fdfdff'
    },
    PageHeader:{
        padding:theme.spacing(3),
        display:'flex',
        marginBottom:theme.spacing(1)
    },
    pageIcon:{
        display:'inline-block',
        padding:theme.spacing(2),
        color:'#3c44b1'
    },
    pageTitle:{
        paddingLeft:theme.spacing(4),
        '& .MuiTypography-subTitle2':{
            opacity:'0.6'
        }
    }
}))
const PageHeader = ({title,subTitle,icons}) => {
    const classes=usestyles()
    return (
       
       <Paper elevation={0} className={classes.root}>
           <div className={classes.PageHeader}>
               <Card className={classes.pageIcon}>
                 {icons}
               </Card>
               <div className={classes.pageTitle}>
                   <Typography
                   variant='h5'
                   component='div'>{title} </Typography>
                    <Typography
                   variant='subTitle2'
                   component='div'>{subTitle} </Typography>
               </div>

           </div>
       </Paper>
            
      
    )
}

export default PageHeader
