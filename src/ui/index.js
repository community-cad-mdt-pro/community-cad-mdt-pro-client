import React from 'react';
import {hot} from 'react-hot-loader';
import '../../scss/opencad-react.scss';
import {Home} from './components/home';

class UICore extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Home/>
        );
    };
}

export default hot(module)(UICore);
