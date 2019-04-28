import React from 'react';
import {hot} from 'react-hot-loader';
import '../../scss/opencad-react.scss';
import {Home} from './components/home';
import {observer} from 'mobx-react';
import {select as userSelect} from './stores/user';

class UICoreComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const loggedIn = userSelect.userLoggedIn();

        console.log('loggedIn', loggedIn);
        return (
            <div className='openreact-cad-main'>
                <div
                    id='particles-background'
                    className='vertical-centered-box'
                >
                </div>
                <div
                    id='particles-foreground'
                    className = 'vertical-centered-box'
                >
                </div>
                { loggedIn
                    ? <div>{'hi'}</div>
                    : <Home/>
                }
            </div>
        );
    };
}

const UICore = observer(UICoreComponent);

export default hot(module)(UICore);
