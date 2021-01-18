import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'


import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,

  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};
const phoneNumber = 'tel:9522613457'

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em'
    }
  },
  
  
  tab: {
    ...theme.typography.tab,
    fontSize: '1.3em',
    minWidth: '10',
    margin: '.5em',
    
    color: theme.palette.common.brightblue
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    
    height: '45px'
  },
 
  drawerIcon: {
    height: '50px',
    width: '50px',
    color: theme.palette.common.brightblue
  },
  drawerIconContainer: {
    marginLeft: 'auto',
    '&:hover': {
      backgroundColor: 'transparent'
    }
  },
  drawer: {
    backgroundColor: theme.palette.common.darkblue,
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.lightgrey,
  },
  drawerItemSelected: {
    "& .MuiListItemText-root":{
    opacity: 1
    }
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1
  }
}))

export default function Header(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'))
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent)

  const [openDrawer, setOpenDrawer] = useState(false)
  
  

  const handleChange = (e, newValue) => {
    props.setValue(newValue)
  }
  
  const routes = [
    { name: 'Home', link: '/', activeIndex: 0 },
    { name: 'Portfolio', link: '/portfolio', activeIndex: 1},
    { name: 'About Me', link: '/about', activeIndex: 2 },
    

  ]
  useEffect(() => {
    [ ...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex)
            if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
              props.setSelectedIndex(route.selectedIndex)
            }
          }
          break;
        default:
          break;
      }
    })
  }, [props.value, props.selectedIndex, routes, props])

  const tabs = (
    <React.Fragment>
      <Tabs centered value={props.value} onChange={handleChange} centered indicatorColor='primary'>
        {routes.map((route, index) => (
          <Tab key={`${route}${index}`} className={classes.tab} component={Link} to={route.link} label={route.name} aria-owns={route.ariaOwns} aria-haspopup={route.ariaPopup} onMouseOver={route.mouseOver} />
        ))}
        
      </Tabs>
      
        
      
      
    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer classes={{ paper: classes.drawer }} disableBackdropTransition={!iOS} disableDiscovery={iOS} open={openDrawer} onClose={() => setOpenDrawer(false)} onOpen={() => setOpenDrawer(true)}>
        <div className= {classes.toolbarMargin}></div>
        <List disablePadding>
          {routes.map(route => (
            <ListItem key={`${route}${route.activeIndex}`} divider button component={Link} to={route.link} onClick={() => { setOpenDrawer(false); props.setValue(route.activeIndex)}} selected={props.value === route.activeIndex} classes={{selected: classes.drawerItemSelected}}>
              <ListItemText className={classes.drawerItem} disableTypography>{route.name}</ListItemText>
            </ListItem >
          ))}
          <ListItem classes= {{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}} onClick={() => { setOpenDrawer(false) }} divider button component="a" href={phoneNumber}>
            <ListItemText className={classes.drawerItem} disableTypography>Call Me</ListItemText>
          </ListItem>
          <ListItem classes= {{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}} onClick={() => { setOpenDrawer(false) }} divider button component="a" href='mailto:n.mckenzie@live.com' target='_blank'>
            <ListItemText className={classes.drawerItem} disableTypography>Email Me</ListItemText>
          </ListItem>
          <ListItem classes= {{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}} onClick={() => { setOpenDrawer(false) }} divider button component="a" href="https://drive.google.com/file/d/1khOdlN1tN4yWR1OK-ZMjtUwbbJ35RFBY/view?usp=sharing" target='_blank'>
            <ListItemText className={classes.drawerItem} disableTypography>My Resume</ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  )
  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar className={classes.appbar} position='fixed'>
          
            {matches ? drawer : tabs}
         
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
}