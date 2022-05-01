import React, { ReactElement, FC } from "react";
import "../../styles/DashboardStyles/Dashboard.scss";
import { DashboardNavbar, HeroSection, Reviews, UpcomingShows } from "../GlobalExports";
const Dashboard: FC<any> = (): ReactElement => {
  return (
    <>
      <div className="dashboardContainer">
          <DashboardNavbar/>
        <HeroSection />
      </div>
      <div className="dashboardSubContainer">
        <UpcomingShows />
        <Reviews />
      </div>
    </>
  );
};

export default Dashboard;
