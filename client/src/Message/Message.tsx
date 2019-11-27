import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TextField, Grid, Paper } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            margin: theme.spacing(1),
        },
        input: {
            display: 'none',
        },
    }),
);


class Message extends React.Component {

    message = {
        title: "",
        text: "",
    } 


    hadleTitleChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
        this.message.title = event.target.value;
    }

    hadleMessageChange = (event:  React.ChangeEvent<HTMLInputElement>) => {
        this.message.text = event.target.value;
    }

    handleSend = () => {
        const message = JSON.stringify(this.message);
        console.log(message);
    }

    render() {
        return (
            <React.Fragment>
                <Grid container justify="center">
                    <Grid item xs={8}>
                        <Paper >
                            <Grid container justify="center">
                                <Grid item xs={11}>
                                    <TextField
                                        required
                                        id="standard-required"
                                        label="Обязательное поле" // Вынести в интернационализацию
                                        defaultValue="Hello World"
                                        fullWidth
                                        margin="normal"
                                        onChange={this.hadleTitleChange}
                                    />
                                </Grid>
                                <Grid item xs={11}>
                                    <TextField
                                        id="standard-textarea"
                                        label="Multiline Placeholder"
                                        placeholder="Placeholder"
                                        multiline
                                        fullWidth
                                        margin="normal"
                                        onChange={this.hadleMessageChange}
                                    />
                                </Grid>
                                <Grid container
                                    xs={11}
                                    justify="flex-end"
                                // spacing={2}
                                >
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        startIcon={<DeleteIcon />}
                                    >
                                        Delete
                                    </Button>

                                    <NavLink to={`/sent/`}>
                                        <Button
                                            variant="contained"
                                            // color="primary"
                                            // endIcon={<Icon>send</Icon>}
                                            onClick={this.handleSend}
                                        >
                                            Send
                                    </Button>
                                    </NavLink>

                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

export default Message;