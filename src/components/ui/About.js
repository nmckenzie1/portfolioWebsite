import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ProfileImg from '../../assets/ddd.png'

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid white",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
      background: theme.palette.common.black,
    padding: "1rem",
    border: "2px solid " + theme.palette.common.lightgrey,
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "white white transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: theme.palette.common.lightgrey,
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent white white",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "tomato",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: theme.palette.common.brightblue,
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: theme.palette.common.lightgrey,
    padding: 0,
    textTransform: "uppercase",
    background: theme.palette.common.black,
    borderBottom: "2px solid " + theme.palette.common.lightgrey,
  },
  body1: {
    color: "white",
    textAlign: 'center'
  },
  subtitle1: {
    color: theme.palette.common.bluegreen,
  },
  ul: {
    listStyleType: 'none',
    textAlign: 'center',
  },
  profileImage:{
    height: '18em',
    borderRadius: '150px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
  
}));

const About = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Who am I?
      </Typography>
      <img src={ProfileImg} className={classes.profileImage} />
      <Box component="div" className={classes.timeLine}>
        
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Software Developer
          </Typography>
          
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            I am a full stack software engineer capable of creating and maintaining scalable solutions for any business application.
            I am a graduate of the University of Minnesota's Full Stack Coding Bootcamp. I enjoy working with applications of all sizes, and love solving problems.
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
             Some Technologies I've used include:<br></br>
           
               MongoDB | GitHub | Firebase<br></br>
               React.js | Material-UI | VSCode<br></br>
              Express.js | MySQL | NPM<br></br>
               Node.js | Bootstrap | jQuery
               
          
          </Typography>
        </Box>
       
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Photographer
          </Typography>
         
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            I love taking photos; it's my favorite hobby. Ever since taking photography classes in highschool I have been snapping photos and collecting cameras. 
            My favorite things to take photos of is nature and architecture. When I travel I am usually carrying at least two cameras if not more! My main working camera is digital but I still love film photography, and get my developed locally.
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            My current cameras I shoot with: <br></br>
            Sony A7Riii | Nikon F100 | Fuji x100F
            

          </Typography>
        </Box>
        
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
           World Traveler/Eater
          </Typography>
          
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            In my off time I (and before covid) I am usually off exploring the globe. I love to travel to experience new culture and eat new food. I am most content sitting in a cafe/restaurant/food-stall/dining hall eating food I have never seen before.
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Currently I have traveled to 23 different countries around the globe.
          </Typography>
        </Box>
        
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Fitness enthusiast
          </Typography>
          
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
           Growing up I lived a rather unhealthy lifestyle. I was very sedentary and had a very poor diet. I decided to change my habits shortly after high-school and have never looked back. I have personally felt the difference that leading a healthy and active lifestyle 
           can have on ones wellbeing. During my fitness journey I lost over 100 pounds and am feeling better than ever!
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
           I am a Certified yoga instructor, and am working on NASM personal training certification.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
