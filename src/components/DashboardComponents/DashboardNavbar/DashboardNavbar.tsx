import { AppBar, Box,Typography,Button,Toolbar } from "@material-ui/core";
import React, { ReactElement, FC } from "react";
import '../../../styles/DashboardNavbarStyles/DashboardNavbar.scss'
import logo from '../../../assets/dashboardNavbarAssets/navLogo.png'
const DashboardNavbar: FC<any> = (): ReactElement => {
    return (
        <div className="">
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="dashboardNavbar">
        <Toolbar>
            <div className="dashboardNavbarLogoBox">
            <img src={logo} alt="logo" className="dashboardNavbarLogo" />
            </div>
        
          <Typography variant="body2">Search</Typography>
        </Toolbar>
      </AppBar>
    </Box>
        </div>
    );
};

export default DashboardNavbar;