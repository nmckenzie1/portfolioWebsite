import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import Particles from './Particles'

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: theme.palette.common.brightblue,
  },
  subtitle: {
    color: theme.palette.common.lightgrey,
    textTransform: "uppercase",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["I'm Neil McKenzie"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Software Developer",
            "Photographer",
            "World Traveler",
            "Food Devourer",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
    </Box>
    <Particles/>
    </React.Fragment>
  );
};

export default Home;