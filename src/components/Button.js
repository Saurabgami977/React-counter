import React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));

export default function ButtonComp(props) {
    const classes = useStyles();
    const propColor = props.color
    return (
        <div className={classes.root}>
            <Button
                variant="contained"
                style={{ backgroundColor: props.color, color: 'white' }}
                onClick={props.click}>
                {props.value}
            </Button>
        </div >
    )
}
