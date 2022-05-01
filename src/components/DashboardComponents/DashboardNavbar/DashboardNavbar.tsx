import { AppBar, Box,Typography,Button,Toolbar,Menu,MenuItem, Grid } from "@material-ui/core";
import React, { ReactElement, FC } from "react";
import '../../../styles/DashboardNavbarStyles/DashboardNavbar.scss'
import logo from '../../../assets/dashboardNavbarAssets/navLogo.png'
import SearchIcon from '@mui/icons-material/Search';
import {RiShoppingBag3Line} from 'react-icons/ri'
import MenuIcon from '@mui/icons-material/Menu';

const DashboardNavbar: FC<any> = (): ReactElement => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div className="">
    <Grid container>
        <Grid item xs={12}>
        <AppBar position="static" className="dashboardNavbar">
        <Toolbar>
            <div className="dashboardNavbarLogoBox">
            <img src={logo} alt="logo" className="dashboardNavbarLogo" />
            </div>
            <div className="dashboardNavbarLarge">
            <Button size="large" className="dashboardNavbarItems"><SearchIcon/>Search</Button>
          <Button size="large" className="dashboardNavbarItems">Help</Button>
          <Button size="large" className="dashboardNavbarItems">Account</Button>
          <Button size="large" className="dashboardNavbarItems dashboardNavbarBagIcon"><RiShoppingBag3Line/></Button>
            </div>
         
        <div className="dashboardNavbarSmall">
        <Button size="large" className="dashboardNavbarItems"><SearchIcon/></Button>
        <Button size="large" className="dashboardNavbarItems dashboardNavbarBagIcon"><RiShoppingBag3Line/></Button>
        <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon className="dashboardNavbarMenuIcon"/>
      </Button>
      <Menu
        
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Help</MenuItem>
        <MenuItem onClick={handleClose}>Account</MenuItem>
        
      </Menu>

        </div>
         
          
        </Toolbar>
      </AppBar>
        </Grid>
      
    </Grid>
        </div>
    );
};

export default DashboardNavbar;