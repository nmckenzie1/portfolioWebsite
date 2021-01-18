import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../../assets/chategoriez.png";
import project2 from "../../assets/pokememory.png";
import project3 from "../../assets/googlebook.png";
import project4 from "../../assets/notetaker.png";

import project6 from "../../assets/burgerapp.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    
    height: "100%",
    opacity: 1,
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
    borderTop: 'solid 3px black',
    borderLeft: 'solid 3px black',
    borderRight: 'solid 3px black',
    borderBottom: 'solid 5px ' + theme.palette.common.brightblue
  },
  cardImg:{
    borderBottom: 'solid 3px black'
  },
  cardBody:{
    background: 'black',
    color: 'white'
  },
  cardButtonContainer:{
background: theme.palette.common.lightgrey
  }
}));

const projects = [
  {
    name: "Chategories",
    description: `A real time chat app built using react, material-ui, and firestore. This app is designed for students looking to connect with other students and chat about topics of interest.`,
    image: project1,
    gitHub: "https://github.com/nmckenzie1/chategories",
    deployed: "https://chategories-57274.web.app/"
  },
  {
    name: "PokeMemory",
    description: `This app was designed to be a fun matching game with characters from the Pokemon franchise! It is also hooked up to a database for user authentication and highscore recording.`,
    image: project2,
    gitHub: "https://github.com/nmckenzie1/pokeMemory",
    deployed: "https://polar-escarpment-17006.herokuapp.com/"
  },
  {
    name: "Google Books Finder",
    description: `This app searches the google books api and allows the user to save a book for later reference.`,
    image: project3,
    gitHub: "https://github.com/nmckenzie1/googleBooks",
    deployed: "https://mysterious-wildwood-46775.herokuapp.com/"
  },
  {
    name: "Note Taker App",
    description: `This app allows a user to take notes and save them to a database for later reference`,
    image: project4,
    gitHub: "https://github.com/nmckenzie1/noteTaker",
    deployed: "https://cryptic-wildwood-91821.herokuapp.com/"
  },
  
  {
    name: "Big Mac Burgers",
    description: `This app allows users to create their own custom burger, order it, and save it for eating for later.`,
    image: project6,
    gitHub: "https://github.com/nmckenzie1/burger",
    deployed: "https://guarded-wave-76800.herokuapp.com/"
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia className={classes.cardImg}
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent className={classes.cardBody}>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" >
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardButtonContainer}>
                <Button variant='contained' className={classes.cardButton} size="medium" color="primary" href={project.gitHub} target='_blank' rel="noopener noreferrer">
                  Github Repo
                </Button>
                <Button variant='contained' className={classes.cardButton} size="medium" color="primary" href={project.deployed} target='_blank' rel="noopener noreferrer">
                  Live Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;