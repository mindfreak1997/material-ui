import React,{useState} from 'react'
import EmployeeForm from './EmployeeForm'
import PageHeader from '../../PageHeader';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Paper, TableBody, TableCell, TableRow ,Table, TableHead, TablePagination, Toolbar, InputAdornment, Tooltip} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { TableContainer, TblPagination, useTable } from '../../useTable';
import { deleteEmployee, getAllEmployee, updateEmployee } from '../../../services/employeeServices';
import { Controls } from '../../controls/Controls';
import Search from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import Popup from '../../controls/Popup';
import { insertEmployees } from '../../../services/employeeServices'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import CloseIcon from '@mui/icons-material/Close';
import Notification from '../../Notification';
import ConfirmDialog from '../../ConfirmDialog';
import ToolTip from '../../ToolTip';

const useStyles=makeStyles(theme=>({
    pageContent:{
margin:theme.spacing(5),
padding:theme.spacing(3)
    },
    searchInput:{
        width:'75%'
    },
    newButton: {
        position: 'absolute',
        right:'0px'
    }
}))
const Employees = () => {
    const [employee,setEmployee]=useState(getAllEmployee())
    const [filterFn,setFilterFn]=useState({ fn: items => { return items; } })
    const pages=[5,10,25]
    const [page,setPage]=useState(0)
    const [rowsPerPage,setRowsPerPage]=useState(pages[page])
    const [openPopup,setOpenPopup]=useState(false)
    const [recordForEdit, setRecordForEdit] = useState(null)
    const [tipOpen,setTipOpen]=useState(false)
    const [notify, setNotify] = useState({ isOpen: false, message: '', type: '' })
    const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })
    const classes=useStyles()
    const handleChangePage=(e,newPage)=>{
        setPage(newPage)
    }
    const handleRowsPerPage=(e)=>{
setRowsPerPage(parseInt(e.target.value,10))
setPage(0)
    }
    
    const handleSearch=(e)=>{
let target=e.target
setFilterFn({
    fn: items => {
        if (target.value == "")
            return items;
        else
            return items.filter(x => x.fullName.toLowerCase().includes(target.value))
    }
})
    }
    const openInPopup = (item) => {
        setRecordForEdit(item)
        setOpenPopup(true)
    }
    const handleClose = () => {
        setTipOpen(false);
      };
    
      const handleOpen = () => {
        setTipOpen(true);
      };
    const recordsAfterPaging=()=>{
        return filterFn.fn(employee).slice(page * rowsPerPage, (page + 1) * rowsPerPage)
    }
    const addOrEdit=(formData,handleReset)=>{
        if (formData.id == 0)
        insertEmployees(formData)
    else
        updateEmployee(formData)
        setRecordForEdit(null)
        handleReset()
        setOpenPopup(false)
        setEmployee(getAllEmployee())
    }
    const onDelete = id => {
        setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
        deleteEmployee(id);
        setEmployee(getAllEmployee())
        setNotify({
            isOpen: true,
            message: 'Deleted Successfully',
            type: 'error'
        })
    }
    return (
        <div>
            <PageHeader title='New Employees' subTitle='Form Design With Validation'  icons={<PeopleAltIcon fontSize='large'/>}/>
            <Paper className={classes.pageContent}>
            {/*   <EmployeeForm />  */} 
            <Toolbar style={{display:'flex',flexDirection:'row'}}>
                <Controls.Input
                className={classes.searchInput}
                label='Search Employee'
                onChange={handleSearch}
                InputProps={{startadorement:(<InputAdornment position='start'>
                <Search/>
                </InputAdornment> ) 
                }}/>
                <Controls.Button
                className={classes.newButton}
                style={{marginLeft:'125px'}}
                text='Add New'
                variant='outlined'
                startIcon={<AddIcon/>}
                onClick={()=>{
                    setOpenPopup(true)
                }}/>
            </Toolbar>
          <TableContainer>
              <TableHead>
                  <TableRow>
                      <TableCell>Employee Name</TableCell>
                      <TableCell>Employee email</TableCell>
                      <TableCell>Employee Mobile</TableCell>
                      <TableCell>Department</TableCell>
                      <TableCell>Actions</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
              {
                  recordsAfterPaging().map(ele=>{
                      return(
                          <TableRow key={ele.id}>
                              <TableCell>{ele.fullName}</TableCell>
                              <TableCell>{ele.email}</TableCell>
                              <TableCell>{ele.mobile}</TableCell>
                              <TableCell>{ele.departmentId}</TableCell>
                              <TableCell>
                                   <ToolTip open={tipOpen} onClose={handleClose} onOpen={handleOpen} title="Click to Edit" arrow>
                                       <Controls.ActionButton
                                            color="primary"
                                            onClick={() => { openInPopup(ele) }}>
                                             <Tooltip title="Click to Edit" placement="bottom">
                                            <EditOutlinedIcon fontSize="small" />
                                            </Tooltip>
                                        </Controls.ActionButton>
                                    </ToolTip>
                                        
                                        <Controls.ActionButton
                                            color="secondary"
                                            onClick={() => {
                                                setConfirmDialog({
                                                    isOpen: true,
                                                    title: 'Are you sure to delete this record?',
                                                    subTitle: "You can't undo this operation",
                                                    onConfirm: () => { onDelete(ele.id) }
                                                })
                                            }}>
                                                <Tooltip title="Click to Delete" placement="bottom">
                                            <CloseIcon fontSize="small" />
                                            </Tooltip>
                                        </Controls.ActionButton>
                                        
                              </TableCell>
                          </TableRow>
                      )
                  })
              }
              </TableBody>
          </TableContainer>
          <TablePagination
        rowsPerPageOptions={pages}
        page={page}
        component='div'
        rowsPerPage={rowsPerPage}
        count={employee.length}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleRowsPerPage}
        />
            </Paper>
            <Popup
            openPopup={openPopup}
            title='Employee Form'
            setOpenPopup={setOpenPopup}>
            <EmployeeForm addOrEdit={addOrEdit} recordForEdit={recordForEdit}/>
            </Popup>
            <Notification
                notify={notify}
                setNotify={setNotify}
            />
            <ConfirmDialog
                confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
            />
        </div>
    )
}

export default Employees
