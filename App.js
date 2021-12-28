
import {  createTheme, CssBaseline,ThemeProvider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Header from './components/header';
import SideMenu from './components/SideMenu';
import Employees from './components/Pages/Employees/Employees';

const theme=createTheme({
  palette:{
    primary: {
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#f8324526'
    },
    background:{
      default:'#B1D0E0'
    },
    shape:{
      borderRadius:'12px'
    },

  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  }
})
const useStyle=makeStyles({
  appMain:{
    paddingLeft:'200px',
    height:'100%'
  }
})
function App() {
  const classes=useStyle()
  return (
    
    <ThemeProvider theme={theme}>
      <SideMenu/>
      <div className={classes.appMain}>
        <Header/>
        
        <Employees/>
      </div>
      <CssBaseline/>
    </ThemeProvider>
  
   
  );
}

export default App;
