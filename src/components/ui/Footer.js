import React from 'react';

import {makeStyles} from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import Instagram from '@material-ui/icons/Instagram'
import Mail from '@material-ui/icons/Mail'
import LinkedIn from '@material-ui/icons/LinkedIn'
import Github from '@material-ui/icons/GitHub'



const useStyles = makeStyles(theme => ({
    footer:{
        backgroundColor: theme.palette.common.darkblue,
        zIndex: 1302,
        width: '100%',
        position: 'fixed',
        bottom: 0,
       
    },
    icons:{
        color: theme.palette.common.brightblue,
       
    },
    iconSize:{
      fontSize: '2.5em',
      color: theme.palette.common.brightblue,
    },
    bottomNavLabel:{
        color: theme.palette.common.brightblue,
        fontSize: '1.75em',
        fontWeight: 'bold'
    },
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '.1em',
        [theme.breakpoints.down('md')]: {
          marginBottom: '.2em'
        },
        [theme.breakpoints.down('xs')]: {
          marginBottom: '.2em'
        }
      },
}))

export default function Footer(props) {
const classes = useStyles()

return (
<React.Fragment>
<BottomNavigation showLabels='true' className={classes.footer}>
<BottomNavigationAction label={<span className={classes.iconSize}>CV</span>} href="https://drive.google.com/file/d/1khOdlN1tN4yWR1OK-ZMjtUwbbJ35RFBY/view?usp=sharing"  target="_blank" rel="noopener noreferrer" classes={{ iconOnly: classes.iconSize }} />
<BottomNavigationAction icon={<LinkedIn className={classes.iconSize}/>} href="https://www.linkedin.com/in/nmckenzie1/"  target="_blank" rel="noopener noreferrer" classes={{ iconOnly: classes.iconSize }}   />
<BottomNavigationAction icon={<Github className={classes.iconSize}/>} href="https://github.com/nmckenzie1"  target="_blank" rel="noopener noreferrer" classes={{ iconOnly: classes.iconSize }} />
<BottomNavigationAction icon={<Instagram className={classes.iconSize}/>} href="https://instagram.com/a_wet_blanket"  target="_blank" rel="noopener noreferrer" classes={{ iconOnly: classes.iconSize }} />
<BottomNavigationAction icon={<Mail className={classes.iconSize}/>} href="mailto:n.mckenzie@live.com" rel="noopener noreferrer" classes={{ iconOnly: classes.iconSize }} />
</BottomNavigation>
<div className={classes.toolbarMargin} />
</React.Fragment>
)
}