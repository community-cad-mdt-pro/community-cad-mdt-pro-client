import React from 'react';
import PropTypes from 'prop-types';
import {validateLogin} from "../data/user";

export class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null
        };
    }

    updateEmail = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    updatePassword = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    loginHandler = async () => {
        await validateLogin(this.state.email, this.state.password);
    }

    render() {
        return (
            <div className='login-form'>
                <div>
                    <h1>{'Secure Entry'}</h1>
                    <small>Unauthorized access attempts will be prosecuted to the full extent of the law.</small>
                    <div className='input-block-inline'>
                        <input
                            className='username'
                            name='username'
                            onChange={this.updateEmail}
                            placeholder='enter your email address'
                        />
                        <input
                            className='password'
                            name='password'
                            onChange={this.updatePassword}
                            placeholder='enter your password'
                            type='password'
                        />
                    </div>
                </div>
                <div className='button-block-inline'>
                    <button
                        className='btn btn-primary'
                        onClick={this.loginHandler}
                    >
                        {'Log In'}
                    </button>
                    <a
                        name='reset-password'
                        onClick={this.props.invokePasswordReset}
                        title='Reset Password'
                    >
                        {'Reset Password?'}
                    </a>
                </div>
            </div>
        );
    };
}

Login.propTypes = {
    invokePasswordReset: PropTypes.func.isRequired
};
