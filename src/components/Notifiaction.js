import React from 'react';
import { ToastContainer } from 'react-toastify'

const Notification = ({ message, onClose }) => {
    return(
        <ToastContainer
            position="top-right"
            limit={1}
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        >{message}
        </ToastContainer>
    )
}

export default Notification