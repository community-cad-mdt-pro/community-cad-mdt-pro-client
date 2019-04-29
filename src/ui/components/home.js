import React from "react";
import {Login} from './login';
import {ResetForm} from "./reset-password";
import {resetPassword} from "../../utilities/reset-password";
import '../../../scss/components/home.scss';
import logo from '../../../assets/overrides/img/logo.png';
import Swal from 'sweetalert2';


export class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            resetPassword: false
        };
    }

    passwordResetHandler = (event) => {
        resetPassword(event.target.value);

        Swal.fire({
            title: 'Password Reset',
            text: 'A password reset has been emailed to the email on file for your account.'
        });

        this.setState({
            resetPassword: false
        });
    };

    invokePasswordReset = () => {
        this.setState({
            resetPassword: true
        });
    };

    render() {
        const loginReset = this.state.resetPassword ? <ResetForm onClickHandler={this.passwordResetHandler}/> : <Login invokePasswordReset={this.invokePasswordReset}/>;

        return (
            <div>
                <div className='vertical-centered-box'>
                    <div className='content'>
                        <img
                            alt='BayRp.com'
                            className='bnrp_logo'
                            src={logo}
                        />
                        <h1 className='main-site-title'>{'CAD / MDT'}</h1>
                        {loginReset}
                        <div className='bottom-area'>
                            <a
                                href='https://bayrp.com'
                                target='_blank'
                                title='Bay Area RP'
                            >
                                {'BayRp.com'}
                            </a>{'•'}
                            <a
                                href='ts3server://ts.bayrp.com'
                                target='_blank'
                                title='Bay Area RP Teamspeak'
                            >
                                {'ts.bayrp.com'}
                            </a>{'•'}
                            <a
                                href='http://livemap.bayrp.com'
                                target='_blank'
                                title='Bay Area RP Live Map'
                            >
                                {'livemap.bayrp.com'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
