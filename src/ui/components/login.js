import React from 'react';
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
        const result = await validateLogin(this.state.email, this.state.password);
    }

    render() {
        return (
            <div className='login-form'>
                <div>
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
                <button
                    className='btn primary-btn'
                    onClick={this.loginHandler}
                >
                    {'Log In'}
                </button>
            </div>
        );
    };
}
