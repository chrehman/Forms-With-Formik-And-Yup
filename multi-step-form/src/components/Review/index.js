import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import { Button } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        maxWidth: 360,

        margin: "0 auto",
        backgroundColor: theme.palette.background.paper,
    },
}));

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}

export default function Review({ setActiveStep, Values, setFormValues }) {
    const classes = useStyles();
    console.log(Values)

    return (
        <div className={classes.root}>

            <Divider />
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                    <ListItemText primary="First Name" />
                    <ListItemText primary={Values.firstName} />
                </ListItem>
                <Divider />
                <ListItemLink href="#simple-list">
                    <ListItemText primary="Last Name" />
                    <ListItemText primary={Values.lastName} />
                </ListItemLink>
                <Divider />
                <ListItemLink href="#simple-list">
                    <ListItemText primary="Email" />
                    <ListItemText primary={Values.email} />
                </ListItemLink>
                <Divider />
                <ListItemLink href="#simple-list">
                    <ListItemText primary="Card Name" />

                    <ListItemText primary={Values.cardName} />
                </ListItemLink>
                <Divider />
                <ListItemLink href="#simple-list">
                    <ListItemText primary="Card Number" />
                    <ListItemText primary={Values.cardNumber} />
                </ListItemLink>
                <Divider />
            </List>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {

                    setActiveStep(1)
                }}>Back</Button>
            <Button
                variant="contained"
                color="primary"
                onClick={() => {
                    setActiveStep(0)
                    setFormValues({})
                    alert("Form is submitted")

                }}>Submit</Button>
        </div>
    );
}
