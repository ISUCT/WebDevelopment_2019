import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class MessageSent extends React.Component {

    render() {
        return (
            <NavLink to={`/message/`}>
                <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<Icon>send</Icon>}
                >

                    You message was sent
            </Button>
            </NavLink>
        )
    }
}

export default MessageSent;