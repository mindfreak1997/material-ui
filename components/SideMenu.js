import React from 'react'
import {makeStyles,withStyles} from '@mui/styles'


const useStyle= makeStyles({
    SideMenu:{
        
            display: 'flex',
            flexDirection: 'column',
            position: 'absolute',
            left:'0px',
            width:'200px',
            height:' 100%',
            backgroundColor:'#253053'
        
    }
})
const SideMenu = () => {
    const classes=useStyle()
    return (
        <div className={classes.SideMenu}>
            
        </div>
    )
}

export default SideMenu
