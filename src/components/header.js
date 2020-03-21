import React from 'react'
import { Box, Typography, Avatar, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Typed from 'react-typed'
import avatar from '../avatar.png'

// CSS Styles
const useStyles = makeStyles(theme => (
    {
        avatar: {
            width: theme.spacing(15),
            height: theme.spacing(15),
            margin: theme.spacing(1 )
        },
        title: {
            color: 'tomato'
        },
        subTitle: {
            color: 'tan',
            marginBottom: '3rem'
        },
        typedContainer: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100vw',
            textAlign: 'center',
            zIndex: 1
        }
      }
));

const Header = () => {
    const classes = useStyles()
    return (
        <Box className={classes.typedContainer}>
            <Grid  container justify="center">
            <Avatar className={classes.avatar} src={avatar} alt="Gulfaraz" />
            </Grid>
            <Typography variant='h4' className={classes.title}>
                <Typed strings={["Gulfaraz Hassan"]} typeSpeed={40} />
            </Typography>
            <br />
            <Typography variant='h5' className={classes.subTitle}>
                <Typed strings={["React.js Development", "MERN Stack Development", "React Native Development"]} typeSpeed={40} backSpeed={60} loop />
            </Typography>
        </Box>
    )
}

export default Header
