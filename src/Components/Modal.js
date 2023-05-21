import React from 'react';

// Modal component for submission confirmation
function Modal({text, closeModal, submit}) {

    return (

        <div className='modalBackground'>
            <div className='modalContainer dark'>
                <div className='modalTitle'>
                    <p>Are you sure you want to submit this? Keep in mind that this website is intended to be used with anonymity, so do not include any information that can be used to identify yourself. Keep in mind that any profanity will be censored.</p>
                </div>
                <div className='modalBody'>
                    <p>Your confession:</p>
                    <p>{`"${text}"`}</p>
                </div>
                <div className='modalFooter'>
                    <button onClick={() => closeModal(false)}>Cancel</button>
                    <button onClick={submit}>Confess</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;