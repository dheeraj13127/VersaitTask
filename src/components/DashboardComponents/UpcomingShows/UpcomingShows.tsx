import {
  CardMedia,
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
} from "@material-ui/core";

import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import React, { ReactElement, FC } from "react";
import "../../../styles/UpcomingShowsStyles/UpcomingShows.scss";
import { upcomingShowsData } from "./UpcomingShowsData/UpcomingShowsData";
const UpcomingShows: FC<any> = (): ReactElement => {
  return (
    <div className="upcomingShowsContainer">
        
      <Grid container>
        <Grid item xs={12}>
          <div className="upcomingShowsBox">
            <Typography variant="h6" className="upcomingShowsHeader">
              <span className="specialBorder">Up</span>coming Shows
            </Typography>
            <Button size="small" className="upcomingShowsViewAll">
              View All
            </Button>
          </div>
        </Grid>
      </Grid>
      <Grid
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        container
        className="upcomingShowsCardContainer"
      >

        {upcomingShowsData.map((ud, key) => (
          <Grid key={key} item xs={10} sm={6} md={3} lg={2} >
              <div className="upcomingShowsCardBox">
              <Card className="upcomingShowsCard">
              <CardMedia
                className="upcomingShowsCardImage"
                component="img"
                image={ud.url}
                alt="singers"
              />
              <CardContent className="upcomingShowsCardContent">
                <Typography
                  variant="caption"
                  className="upcomingShowsCardType"
                  gutterBottom
                >
                  {ud.type}
                </Typography>
                <Typography
                  className="upcomingShowsCardSinger"
                  gutterBottom
                  variant="body2"
                  component="div"
                >
                  {ud.singer}
                </Typography>
              </CardContent>
              <CardActions className="upcomingShowsActions">
                <Button size="small" className="upcomingShowsCardMoreInfoBtn">
                  More Info{" "}
                  <ArrowForwardIcon className="upcomingShowsCardArrowIcon" />
                </Button>
                <Divider
                  className="upcomingShowsCardDivider"
                  orientation="vertical"
                  variant="middle"
                  flexItem
                />
                <Button size="small"><BookOnlineIcon color="secondary" /></Button>
              </CardActions>
            </Card>
              </div>
          
            
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default UpcomingShows;
