import React, { ReactElement, FC } from "react";
import '../../styles/DashboardStyles/Dashboard.scss'
import { HeroSection } from "../GlobalExports";
const Dashboard: FC<any> = (): ReactElement => {
    return (
        <div className="dashboardContainer">
            <HeroSection/>
        </div>
    );
};

export default Dashboard;