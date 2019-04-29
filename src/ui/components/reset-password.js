import React from 'react';
import PropTypes from 'prop-types';

export function ResetForm(props) {
    return (
        <div className='reset-form'>
            <p>Enter your registered email address below. A link to reset your password will be emailed to you if your email is registered in the system.</p>
            <input
                name='email'
                placeholder='enter your email address'
                type='text'
            />
            <button
                className='btn btn-primary'
                onClick={props.onClickHandler}
                >
                {'Request Reset'}
            </button>
        </div>
    );
}

ResetForm.propTypes = {
    onClickHandler: PropTypes.func.isRequired
};
