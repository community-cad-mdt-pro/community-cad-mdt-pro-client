import React from "react";
import {Login} from './login';
import '../../../scss/components/home.scss';
import logo from '../../../assets/bnrp_white.png';

export function Home() {
    return (
        <div>
            <div className='vertical-centered-box'>
                <div className='content'>
                    <img
                        alt='BayRp.com'
                        className='bnrp_logo'
                        src={logo}
                    />
                    <Login/>
                    <div className='bottomArea'>
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
                        </a>{'•'}
                    </div>
                </div>
            </div>
        </div>
    );
}
