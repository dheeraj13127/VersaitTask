import React, { ReactElement, FC } from "react";
import "../../styles/DashboardStyles/Dashboard.scss";
import { DashboardNavbar, HeroSection, Reviews, UpcomingShows } from "../GlobalExports";

const Dashboard: FC<any> = (): ReactElement => {
  return (
    <>
      <div className="dashboardContainer">
          <DashboardNavbar/>        / Navbar */
        <HeroSection />             / Stats Page */
      </div>
     
      <div className="dashboardSubContainer">
    
        <UpcomingShows />  /Upcoming Shows page */
        <Reviews />       /Reviews page */
      </div>
    </>
  );
};

export default Dashboard;
