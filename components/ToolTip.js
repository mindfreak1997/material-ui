import { Tooltip } from '@mui/material'
import React from 'react'

const ToolTip = (props) => {
    const {open,onClose,onOpen,title}=props
    return (
       <Tooltip
       open={open}
       onClose={onClose}
       onOpen={onOpen}
       title={title}
       >
           {props.children}
       </Tooltip>
    )
}

export default ToolTip
