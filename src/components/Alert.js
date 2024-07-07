import React from 'react';

const Alert = (props) => {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{height: '30px'}} className='my-2 justify-content-center align-item-center'>
            {props.alert && (
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show col-md-6`} role="alert">
                    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                </div>
            )}
        </div>
    );
}

export default Alert;