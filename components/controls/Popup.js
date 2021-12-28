import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { Controls } from './Controls'
import CloseIcon from '@mui/icons-material/Close';

const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        paddingRight: '0px'
    }
}))
const Popup = (props) => {
    const classes=useStyles()
    const {title,children,openPopup,setOpenPopup}=props
    return (
        <Dialog open={openPopup}
        maxWidth="md"
         classes={{ paper: classes.dialogWrapper }}>
            <DialogTitle className={classes.dialogTitle}>
                <div style={{ display: 'flex' }}>
                <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                        {title}
                </Typography>
                <Controls.Button
                        color="secondary"
                        text='X'
                        onClick={()=>{setOpenPopup(false)}}>
                       
                </Controls.Button>    
                </div>
            </DialogTitle>
            <DialogContent dividers>
            {children}
            </DialogContent>
        </Dialog>
    )
}

export default Popup
