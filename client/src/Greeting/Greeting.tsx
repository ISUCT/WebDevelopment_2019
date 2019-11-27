import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

class Greeting extends React.Component {
    redirect = () => {
        return <Redirect to="/message"/>
    }

    render() {
        return (
            <NavLink to={`/message/`}>
                <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<Icon>send</Icon>}
                    onClick={this.redirect}
                >

                    Write message
            </Button>
            </NavLink>
        )
    }
}

export default Greeting;