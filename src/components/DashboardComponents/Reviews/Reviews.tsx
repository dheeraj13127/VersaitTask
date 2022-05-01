import {
  Avatar,
  Button,
  Card,
  CardContent,
  
  Grid,
  Typography,
} from "@material-ui/core";
import React, { ReactElement, FC } from "react";
import "../../../styles/ReviewsStyles/Reviews.scss";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { reviewsData } from "./ReviewsData/ReviewsData";

const Reviews: FC<any> = (): ReactElement => {
  return (
    <div className="reviewsContainer">
      <Grid container>
        <Grid item xs={12}>
          <div className="upcomingShowsBox">
            <Typography variant="h6" className="reviewsHeader">
              <span className="specialBorder">Re</span>views
            </Typography>
            <Button size="medium" className="reviewsNavigation">
              1/12 <ArrowBackIcon className="reviewsArrowBackIcon" />
              <ArrowForwardIcon className="reviewsArrowForwardIcon" />
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
        className="reviewsCardContainer"
      >
        {reviewsData.map((rd, key) => (
          <Grid key={key} item xs={12} sm={6} md={4} lg={3}>
              <div className="reviewsCardBox">
              <Card className="reviewsCard">
            
            <CardContent className="">
              <div className="reviewsProfileBox">
              <Avatar src={rd.url}/>
              <div className="reviewsProfileHeadBox">
              <Typography variant="body2" gutterBottom className="reviewsProfileTitle">{rd.title}</Typography>
              <Typography variant="caption" gutterBottom className="reviewsProfileCaption">{rd.caption}</Typography>
              </div>
             
              </div>
            <Typography gutterBottom variant="body1" className="reviewsProfileInfo">{rd.info}</Typography>
            </CardContent>
          </Card>
              </div>
           
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Reviews;
