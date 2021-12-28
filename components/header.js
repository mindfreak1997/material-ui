import React from 'react'
import {AppBar, Badge, Grid, IconButton, InputBase, Toolbar} from '@mui/material'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import SearchIcon from '@mui/icons-material/Search';
import {makeStyles} from '@mui/styles'

const useStyle=makeStyles(theme=>({
    
    SearchInput:{
    opacity:'0.6',
    padding:'0px px',
    fontSize:'1rem ',
    '&:hover':{
    backgroundColor:'#F5F5F5'
    },
    '& .MuiSvgIcon-root':{
     marginRight:'8px'
    }
    },
    btnRoot:{
        backgroundColor:'green'
    },
    
        btnLabel:{
            backgroundColor:'#502064'
        }
    
}))
const Header = () => {
const classes=useStyle()
    return (
        <AppBar position='static' >
            <Toolbar>
<Grid container alignItems='centre'>
<Grid item  style={{backgroundColor:'#fff'}} >
<InputBase
className={classes.SearchInput}
placeholder='search'
startAdornment={<SearchIcon fontSize='small'/>}
/>
</Grid>
<Grid item sm></Grid>
<Grid item >
    <IconButton className={classes.btnRoot} >
        <Badge badgeContent={4} color='secondary' >
<NotificationsActiveIcon/>
        </Badge>
    </IconButton>
    <IconButton>
        <Badge badgeContent={4} color='primary' >
<ChatBubbleOutlineOutlinedIcon/>
        </Badge>
    </IconButton>
</Grid>
</Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Header
