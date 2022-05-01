import { Box, Grid, Typography } from "@material-ui/core";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PendingActionsIcon from "@mui/icons-material/PendingActions";

import React, { ReactElement, FC } from "react";
import "../../../styles/HeroSectionStyles/HeroSection.scss";
const HeroSection: FC<any> = (): ReactElement => {
  return (
    <div className="heroSectionContainer">
      <Grid container>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Typography
            variant="h3"
            gutterBottom
            component="div"
            className="heroSectionHeader"
          >
            Cari Cari
          </Typography>
          <Typography variant="body2" gutterBottom className="heroSectionInfo">
            Live from their sofa to yours. Get closer to your favorite artists,
            and never miss out.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        container
        className="heroSectionProgressContainer"
      >
        <Grid item xs={6} sm={3} md={3} lg={2}>
          <Box className="heroSectionProgressBox">
            <FavoriteBorderIcon color="primary" />
            <Typography

              variant="body1"
              className="heroSectionProgressValue"
              gutterBottom
            >
              0
            </Typography>
            <Typography
              variant="caption"
              className="heroSectionProgressInfo"
              gutterBottom
            >
              Label
            </Typography>
          
          </Box>
        </Grid>
        <Grid item xs={6} sm={3} md={3} lg={2}>
          <Box className="heroSectionProgressBox">
            <PendingActionsIcon className="heroSectionProgressIcon" />
            <Typography
              variant="body1"
              className="heroSectionProgressValue"
              gutterBottom
            >
              0
            </Typography>
            <Typography
              variant="caption"
              className="heroSectionProgressInfo"
              gutterBottom
            >
              Label
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3} md={3} lg={2}>
          <Box className="heroSectionProgressBox">
            <PendingActionsIcon className="heroSectionProgressIcon" />
            <Typography
              variant="body1"
              className="heroSectionProgressValue"
              gutterBottom
            >
              0
            </Typography>
            <Typography
              variant="caption"
              className="heroSectionProgressInfo"
              gutterBottom
            >
              Label
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3} md={3} lg={2}>
          <Box className="heroSectionProgressBox">
            <PendingActionsIcon className="heroSectionProgressIcon" />
            <Typography
              variant="body1"
              className="heroSectionProgressValue"
              gutterBottom
            >
              0
            </Typography>
            <Typography
              variant="caption"
              className="heroSectionProgressInfo"
              gutterBottom
            >
              Label
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default HeroSection;
