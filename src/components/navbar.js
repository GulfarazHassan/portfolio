import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MObileRightMenuSlider from "@material-ui/core/Drawer"
import { AppBar, Toolbar, ListItem, IconButton, ListItemText, Avatar, Divider, List, Typography, Box, ListItemIcon } from '@material-ui/core';
import { ArrowBack, AssignmentInd, Home, Apps, ContactMail } from '@material-ui/icons'
import avatar from '../avatar.png'

// CSS Styles
const useStyles = makeStyles(theme => (
    {
        menuSliderContainer: {
            width: 250,
            background: '#511',
            height: '100%'
        },
        avatar: {
            display: 'block',
            margin: '0.5rem auto',
            width: theme.spacing(13),
            height: theme.spacing(13)
        },
        listItem: {
            color: 'tan'
        }
      }
));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail />,
        listText: "Contacts"
    }
]

const Navbar = () => {
    const [ state, setState ] = useState({
        right: false
    })

    const toggleSlider = (slider, open) => {
        setState({...state, [slider]: open})
    }

    const classes = useStyles()

    const slideList = (slider) => (
        <Box className={ classes.menuSliderContainer } component='div' onClick={() => toggleSlider("right", false)}>
            <Avatar className={ classes.avatar } src={avatar} alt="Gulfaraz" />
            <Divider />
            <List>
                { menuItems.map( (item, key) => (
                    <ListItem button key={key}>
                        <ListItemIcon className={classes.listItem}>{ item.listIcon }</ListItemIcon>
                        <ListItemText primary={ item.listText } className={classes.listItem} />
                    </ListItem>
                ) ) }
            </List>
        </Box>
    )
    return (
        <>
        
        <Box component='nav'>
            <AppBar position="static" style={{ background: '#222' }}>
                <Toolbar>
                    <IconButton onClick={() => toggleSlider("right", true)}>
                        <ArrowBack style={{ color: 'tomato' }}/>
                    </IconButton>
                    <Typography variant='h5' style={{ color: 'tan' }}>Portfolio</Typography>
                    <MObileRightMenuSlider open={state.right} anchor='right' onClose={() => toggleSlider("right", false)}>
                        {slideList("right")}
                    </MObileRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
        
    )
}


export default Navbar;