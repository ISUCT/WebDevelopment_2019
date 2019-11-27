import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { TextField, Grid, Paper } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import { NavLink } from 'react-router-dom';
import MessageItem from './MessageItem';

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

export interface IMessage {
    title: string,
    text: string,
}

class Messages extends React.Component<{},any> {
    constructor(props:any) {
        super(props);
        this.state = {
            messages: [],
        }
    }

    async componentDidMount() {
        const resp = await fetch("http://localhost:9000/test")
        const data = await resp.json();
        console.log(data);
        this.setState({
            messages: data,
        }, () => {console.log("State changed")});
        console.log("State", this.state.messages);
        
    }

    render() {
        console.log("Render",this.state.messages)
        return (
            <React.Fragment>
                {(this.state.messages.map((el:any) => {
                    return (
                        <React.Fragment>
                            <MessageItem item={el} />
                            <br/>
                        </React.Fragment>
                    )
                }))}
            </React.Fragment>
        );
    }
}

export default Messages;